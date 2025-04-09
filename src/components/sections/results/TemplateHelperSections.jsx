import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { allExtrasModifiersById, buffModifiers } from '../../../assets/modifierdata';
import { getSkills, getWeapons } from '../../../state/slices/buildPage';
import { getTraitLines, getTraits } from '../../../state/slices/traits';
import { getGameMode } from '../../../state/slices/userSettings';
import { MAX_INFUSIONS, WEAPONS, getWeight, statInfusionIds } from '../../../utils/gw2-data';
import { createAssumedBuffs } from '../../../utils/toLazyToType-usefulFunctions';
import Section from '../../baseComponents/Section';
import ModalContent from './BuildShareModal/ModalContent';
import GW2Combat from './GW2Combat';
import TemplateHelper from './TemplateHelper';

// const indent = (str, amount) => str.replace(/^/gm, ' '.repeat(amount));
function idToWeapon(id) {
  return Object.values(WEAPONS).find((weapon) => weapon.gw2id === id)?.name;
}

const TemplateHelperSections = ({ character }) => {
  const { t } = useTranslation();
  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);
  const gameMode = useSelector(getGameMode);
  const traitSelection = useSelector(getTraits);
  const traitLines = useSelector(getTraitLines);

  const onClick = (asJson = false) => {
    const {
      attributes,
      results: { unbuffedAttributes } = {},
      gear,
      settings,
      infusions: infusionsRaw,
    } = character;
    const { profession, specialization } = settings;
    const { buffs } = settings.cachedFormState.buffs;

    // Calculate extras
    const {
      Sigil1: sigil1,
      Sigil2: sigil2,
      Enhancement: utility,
      Nourishment: food,
      Runes: runeStringId,
      Relics: relics,
    } = settings.extrasCombination;

    const foodId = allExtrasModifiersById[food]?.gw2id;
    const utilityId = allExtrasModifiersById[utility]?.gw2id;
    const sigil1Id = allExtrasModifiersById[sigil1]?.gw2id;
    const sigil2Id = allExtrasModifiersById[sigil2]?.gw2id;
    const rune = runeStringId ? allExtrasModifiersById[runeStringId] : '';
    const runeName = runeStringId ? rune.text.replace(/(Superior|Rune|of|the)/g, '').trim() : '';
    const infusionsTemp = infusionsRaw
      ? Object.entries(infusionsRaw)
          .map(([type, count]) => [
            ...Array(count).fill(statInfusionIds['+9 Stat Infusion'][type].id),
          ])
          .flat()
      : [];
    const infusions = infusionsTemp.concat(Array(MAX_INFUSIONS - infusionsTemp.length).fill(49432));
    const relicId = allExtrasModifiersById[relics]?.gw2id;

    const { mainhand1: w11, offhand1: w12, mainhand2: w21, offhand2: w22 } = weapons;

    const weapData = {
      ...(w11
        ? {
            weapon1MainId: w11,
            weapon1MainType: idToWeapon(w11),
            weapon1MainSigil1Id: sigil1Id,
            weapon1MainAffix: gear[12],
            weapon1MainInfusion1Id: infusions[16],
          }
        : {}),
      ...(!w12
        ? {
            weapon1MainInfusion2Id: infusions[17],
            weapon1MainSigil2Id: sigil2Id,
          }
        : {
            weapon1OffId: w12,
            weapon1OffType: idToWeapon(w12),
            weapon1OffSigilId: sigil2Id,
            weapon1OffAffix: gear[13],
            weapon1OffInfusionId: infusions[17],
          }),

      ...(w21
        ? {
            weapon2MainId: w21,
            weapon2MainType: idToWeapon(w21),
            weapon2MainSigil1Id: sigil1Id,
            weapon2MainAffix: gear[12],
            weapon2MainInfusion1Id: infusions[16],
          }
        : {}),

      ...(!w22
        ? {
            weapon2MainInfusion2Id: infusions[17],
            weapon2MainSigil2Id: sigil2Id,
          }
        : {
            weapon2OffId: w22,
            weapon2OffType: idToWeapon(w22),
            weapon2OffSigilId: sigil2Id,
            weapon2OffAffix: gear[13],
            weapon2OffInfusionId: infusions[17],
          }),
    };
    const runeId = rune.gw2id;
    const armor = {
      weight: getWeight(profession),
      helmAffix: gear[0],
      helmRuneId: runeId,
      helmRune: runeName,
      helmRuneCount: 6,
      helmInfusionId: infusions[0],
      shouldersAffix: gear[1],
      shouldersRuneId: runeId,
      shouldersRune: runeName,
      shouldersRuneCount: 6,
      shouldersInfusionId: infusions[1],
      coatAffix: gear[2],
      coatRuneId: runeId,
      coatRune: runeName,
      coatRuneCount: 6,
      coatInfusionId: infusions[2],
      glovesAffix: gear[3],
      glovesRuneId: runeId,
      glovesRune: runeName,
      glovesRuneCount: 6,
      glovesInfusionId: infusions[3],
      leggingsAffix: gear[4],
      leggingsRuneId: runeId,
      leggingsRune: runeName,
      leggingsRuneCount: 6,
      leggingsInfusionId: infusions[4],
      bootsAffix: gear[5],
      bootsRuneId: runeId,
      bootsRune: runeName,
      bootsRuneCount: 6,
      bootsInfusionId: infusions[5],
    };

    const backAndTrinket = {
      backItemAffix: gear[11],
      backItemInfusion1Id: infusions[6],
      backItemInfusion2Id: infusions[7],
      amuletAffix: gear[6],
      ring1Affix: gear[7],
      ring1Infusion1Id: infusions[8],
      ring1Infusion2Id: infusions[9],
      ring1Infusion3Id: infusions[10],
      ring2Affix: gear[8],
      ring2Infusion1Id: infusions[11],
      ring2Infusion2Id: infusions[12],
      ring2Infusion3Id: infusions[13],
      accessory1Affix: gear[9],
      accessory1InfusionId: infusions[14],
      accessory2Affix: gear[10],
      accessory2InfusionId: infusions[15],
    };

    let assumedBuffs = buffModifiers.flatMap((buff) => buff.items).filter((buff) => buffs[buff.id]);
    // gamemode is technically not correct since the gamemode is not tied to a character at the moment.
    assumedBuffs = createAssumedBuffs({ buffsRaw: assumedBuffs, gameMode, character });

    const template = {
      attributes: {
        profession,
        specialization,
        data: attributes,
      },
      armor,
      weapon: weapData,
      backAndTrinket,
      consumables: { foodId, utilityId, relicId },
      skills,
      // legends,
      assumedBuffs: { value: assumedBuffs },
      traits: {
        selection: traitSelection,
        lines: traitLines.map((line) => parseInt(line, 10)),
      },
    };

    if (unbuffedAttributes) {
      template.unbuffedAttributes = {
        profession,
        specialization,
        data: unbuffedAttributes,
        info: 'Simulated unbuffed attributes are not exact and may not match ingame hero panel! For example, soulbeast\'s "with axe" and "with torch/dagger" buffs are both included, simulating a scenario which doesn\'t occur in either weapon set on some builds. Use with caution.',
      };
    }

    /*
    const charString = Object.keys(template)
      .map((key) => `${key}={${JSON.stringify(template[key])}}`)
      .join(' ');
      */
    const charString = JSON.stringify(template);
    let toCopy = `<Character title="" gear='${charString}'>\n\n</Character>`;
    if (asJson) {
      toCopy = JSON.stringify(template);
    }

    navigator.clipboard.writeText(toCopy);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <Trans>Development</Trans>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid size={12}>
            <Section
              title={t('Website Templates')}
              helpText={
                <Trans>
                  Create templates for the discretize.eu website. Please check the discretize-guides
                  repo for more information.
                </Trans>
              }
              content={
                <ModalContent
                  character={character}
                  buttons={[
                    { label: 'Copy Build to clipboard', onClick, icon: ContentCopyIcon },
                    { label: 'Copy JSON', onClick: () => onClick(true), icon: ContentCopyIcon },
                  ]}
                />
              }
            />
          </Grid>
          <Grid size={12}>
            <Section
              title={t('Optimizer Templates')}
              content={<TemplateHelper character={character} />}
              helpText={
                <Trans>Create build templates that can be used for the gear optimizer.</Trans>
              }
            />
          </Grid>
          <Grid size={12}>
            <Section title={t('gw2combat project')} content={<GW2Combat character={character} />} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
export default React.memo(TemplateHelperSections);
