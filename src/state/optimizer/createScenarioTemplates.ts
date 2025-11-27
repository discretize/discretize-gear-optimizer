import { parseAmount } from '../../utils/usefulFunctions';
import type { AppliedModifier } from './types/optimizerSetupTypes';
import type { ScenarioTemplate } from './types/optimizerTypes';
import { clamp, cloneScenarioTemplate, scaleValue } from './utils/utils';

/* eslint-disable import/prefer-default-export */
export function createScenarioTemplates(
  appliedModifiers: AppliedModifier[],
  withLogging = false,
): ScenarioTemplate[] {
  // simulate scenarios with/without each of these, according to their uptime.
  const advancedUptimeModifiers = appliedModifiers.filter(
    (appliedModifier) => appliedModifier.amountData?.advancedUptimeSimulation,
  );
  // apply these to all scenarios.
  const basicModifiers = appliedModifiers.filter(
    (appliedModifier) => !advancedUptimeModifiers.includes(appliedModifier),
  );

  // Modifiers with the same category AND same group are simulated as always overlapping.
  // (They must have the same uptime.)

  // Modifiers with the same category in a different group (i.e. different revenant legends)
  // are simulated as never overlapping.
  // (They must have uptimes that sum to ≤1.)

  // Calculate advanced uptime modifier uptimes and discard their amount data;
  // within scenarios, they are 100% effective.
  // Sort them by correlation category and group.
  const categoryData: {
    category?: string;
    groupData: {
      group?: string;
      modifiers: AppliedModifier[];
      uptime: number;
    }[];
  }[] = [];
  advancedUptimeModifiers.forEach((advancedUptimeModifier) => {
    const { amount: amountText, amountData } = advancedUptimeModifier;
    const { value: amountInput } = parseAmount(amountText);
    const uptime = clamp(scaleValue(1, amountInput, amountData), 0, 1);

    if (uptime === 0) return;

    const { amountData: _, ...modifierWithoutAmountData } = advancedUptimeModifier;

    const { correlation } = advancedUptimeModifier.amountData!.advancedUptimeSimulation!;
    if (!correlation) {
      categoryData.push({
        groupData: [{ modifiers: [modifierWithoutAmountData], uptime }],
      });
    } else {
      let categoryDataEntry = categoryData.find(
        ({ category }) => correlation.category === category,
      );
      if (!categoryDataEntry) {
        categoryDataEntry = {
          category: correlation.category,
          groupData: [],
        };
        categoryData.push(categoryDataEntry);
      }

      const { groupData } = categoryDataEntry;

      let groupDataEntry = groupData.find(({ group }) => correlation.group === group);
      if (!groupDataEntry) {
        groupDataEntry = {
          group: correlation.group,
          modifiers: [],
          uptime,
        };
        groupData.push(groupDataEntry);
      }

      if (groupDataEntry.uptime !== uptime) {
        throw new Error(
          `Mismatched uptime chosen for correlated advanced uptime modifiers ${[advancedUptimeModifier, ...groupDataEntry.modifiers].map(({ id }) => id).join('/')}!`,
        );
      }

      groupDataEntry.modifiers.push(modifierWithoutAmountData);
    }
  });

  // add empty group if needed so that group uptimes sum to 100%
  categoryData.forEach(({ groupData: byGroup }) => {
    const categoryTotalUptime = byGroup.reduce((prev, cur) => prev + cur.uptime, 0);

    if (Math.abs(categoryTotalUptime - 1) <= 4 * Number.EPSILON) {
      return;
    }
    if (categoryTotalUptime - 1 >= 4 * Number.EPSILON) {
      throw new Error(
        `More than 100% total uptime chosen for correlated advanced uptime modifiers ${byGroup
          .map(({ modifiers }) => modifiers)
          .flat()
          .map(({ id }) => id)
          .join('/')}!`,
      );
    }
    byGroup.push({ modifiers: [], uptime: 1 - categoryTotalUptime });
  });

  // Create scenarios for every combination of active/inactive for every advanced uptime modifier
  let scenarioTemplates: ScenarioTemplate[] = [{ fraction: 1, appliedModifiers: [] }];
  categoryData.forEach(({ groupData }) => {
    // Yes, each category multiplies the number of scenarios by at least two.
    // Sure hope anet doesn't add a lot of modifiers that need this feature!
    scenarioTemplates = scenarioTemplates
      .map((scenarioTemplate) =>
        groupData.map(({ modifiers, uptime }) => {
          const template = cloneScenarioTemplate(scenarioTemplate);
          template.fraction *= uptime;
          template.appliedModifiers.push(...modifiers);
          return template;
        }),
      )
      .flat();
  });

  const roundTwo = (num: number) => Math.round(num * 100) / 100;

  if (withLogging) {
    console.log(
      'scenario template summary',
      scenarioTemplates.map((scenarioTemplate) => [
        roundTwo(scenarioTemplate.fraction * 100),
        ...scenarioTemplate.appliedModifiers.map(({ id }) => id),
      ]),
    );
  }

  scenarioTemplates.forEach((scenarioTemplate) =>
    scenarioTemplate.appliedModifiers.push(...basicModifiers),
  );

  return scenarioTemplates;
}
