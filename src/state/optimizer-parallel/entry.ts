import { Affix, AttributeName, Attributes, Indicators, WeaponTypes } from '../../utils/gw2-data';
import { Combination, setupCombinations } from '../optimizer/optimizerSetup';
import { getAffixCombinations, getLayerNumber } from './affixTree';
import { FINISHED, SETUP, START } from './workerMessageTypes';

const getAffixId = (affix: string) => (affix ? Object.keys(Affix).indexOf(affix) : null);
const getAttributeId = (attribute: AttributeName) => {
  const attributes = [
    ...Object.values(Attributes).flat(1),
    'Alternative Power',
    'Alternative Precision',
    'Alternative Ferocity',
    'Alternative Critical Chance',
    'Alternative Effective Power',
    'Alternative Critical Damage',

    // profession specific
    'Clone Critical Chance',
    'Phantasm Critical Chance',
    'Phantasm Damage',
    'Siphon Base Coefficient',
    'SiphonDPS',

    // misc
    'Strike Damage',
    'Maximum Health',
    'Outgoing Healing',
    'All Damage',
    'Damage Reduction',
  ];
  attributes[41] = 'Bleeding Coefficient';
  attributes[42] = 'Burning Coefficient';
  attributes[43] = 'Confusion Coefficient';
  attributes[44] = 'Poison Coefficient';
  attributes[45] = 'Torment Coefficient';

  const index = attributes.indexOf(attribute);
  if (index === -1) {
    console.log(attributes);
    throw new Error(`Attribute ${attribute} not found`);
  }

  return index;
};
const getWeaponTypeId = (weaponType: string) => Object.values(WeaponTypes).indexOf(weaponType);

// should make this a settings variable or something later on
const NUM_THREADS = 4;

// replace string values with their corresponding IDs.
// in rust we use enums, which are i32 indexed, so we need to convert the strings to numbers
function modifyCombinations(combinations: Combination[]): any {
  const toReturn = combinations.map((combination) => combination.settings || {}) as any[];

  for (let i = 0; i < combinations.length; i++) {
    const combination = combinations[i];

    if (combination.settings) {
      toReturn[i].rankby = Indicators.indexOf(combination.settings?.rankby);
      toReturn[i].weaponType = getWeaponTypeId(combination.settings?.weaponType);
      toReturn[i].forcedAffixes = combination.settings?.forcedAffixes.map(getAffixId);
      toReturn[i].affixesArray = combination.settings?.affixesArray.map((slot) =>
        slot.map((affix) => getAffixId(affix)),
      );
      toReturn[i].affixStatsArray = combination.settings?.affixStatsArray.map((slot) =>
        slot.map((affixes) =>
          affixes.map((affix) => [getAttributeId(affix[0] as AttributeName), affix[1]]),
        ),
      );

      // in rust we assume that the arrays are always 14 long
      if (toReturn[i].affixesArray.length === 13) {
        // add one more empty slot
        toReturn[i].affixesArray.push([]);
      }
      if (toReturn[i].affixStatsArray.length === 13) {
        // add one more empty slot
        toReturn[i].affixStatsArray.push([]);
      }

      toReturn[i].modifiers.buff = combination.settings?.modifiers.buff.map((mod) => [
        getAttributeId(mod[0] as AttributeName),
        mod[1],
      ]);
      toReturn[i].modifiers.convert = combination.settings?.modifiers.convert.map((mod) => [
        getAttributeId(mod[0] as AttributeName),
        mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
      ]);
      toReturn[i].modifiers.convertAfterBuffs =
        combination.settings?.modifiers.convertAfterBuffs.map((mod) => [
          getAttributeId(mod[0] as AttributeName),
          mod[1].map((convert) => [getAttributeId(convert[0] as AttributeName), convert[1]]),
        ]);

      // we are not interested in these objects in rust - for now
      delete toReturn[i].shouldDisplayExtras;
      delete toReturn[i].appliedModifiers;
      delete toReturn[i].cachedFormState;
      delete toReturn[i].extrasCombination;
    }
  }

  return toReturn;
}

function calculate(reduxState: any, isWasm: boolean) {
  console.log('Parallel Optimizer');
  console.log('State', reduxState);

  // get the extra combinations from the redux state
  // also adjust the settings to be usable by rust (we use c-like enums there)
  const combinations = modifyCombinations(setupCombinations(reduxState));

  console.log(combinations);

  if (combinations.length === 0) {
    console.error('No combinations found');
    return;
  }

  const affixArray = combinations[0]?.affixesArray;
  const layer = getLayerNumber(affixArray, NUM_THREADS);

  console.log(`Creating ${NUM_THREADS} threads to calculate ${layer} layers`);
  const workers = [...Array(NUM_THREADS)].map((_, index) => {
    return {
      status: 'created',
      workerId: index,
      worker: new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }),
    };
  });

  const affixcombinations = getAffixCombinations(affixArray, layer);

  // split work into NUM_THREADS chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(affixcombinations);

  // send chunks to workers
  workers.forEach(({ worker }, index) => {
    worker.postMessage({
      type: SETUP,
      data: {
        chunks: chunks[index],
        combinations,
      },
    });
  });

  const startTime = performance.now();
  // attach listener
  let leafnodes = 0;
  workers.forEach(({ worker }, index) => {
    worker.onmessage = (e) => {
      console.log('Worker message', e.data);
      if (e.data.type === 'FINISHED') {
        console.log('Worker finished', e.data.data);
        leafnodes += e.data.data.leafnodes;

        workers[index].status = FINISHED;

        // check if all workers finished
        if (workers.every(({ status }) => status === FINISHED)) {
          console.log('All workers finished');
          console.log('Leafnodes', leafnodes);
          const endTime = performance.now();
          console.log('Time', endTime - startTime, 'ms');
        }
      }
    };
  });

  // start workers
  workers.forEach(({ worker }) => {
    worker.postMessage({
      type: START,
      data: {
        isWasm,
      },
    });
  });
}

/**
 * Splits the work into NUM_THREADS chunks, each chunk getting an array of subtrees to calculate
 * combinations are split in a round-robin fashion
 *
 * @param combinations all possible affix combinations
 */
function splitCombinations(combinations: number[][]) {
  const chunks = [...Array(NUM_THREADS)].map(() => [] as number[][]);

  let chunkIndex = 0;
  combinations.forEach((combination) => {
    chunks[chunkIndex].push(combination);
    chunkIndex = (chunkIndex + 1) % NUM_THREADS;
  });

  return chunks;
}

export default calculate;
