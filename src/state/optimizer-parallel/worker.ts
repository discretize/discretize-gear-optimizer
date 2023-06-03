import init, { calculate } from 'wasm_module';
import { Combination } from '../optimizer/optimizerSetup';
import { getAffixId, modifyCombinations, transformResults } from './utils';
import { FINISHED, SETUP, START } from './workerMessageTypes';

let chunks: number[][];
let combinations: Combination[];
let thread_num = -1;
let total_threads = -1;

onmessage = (e) => {
  console.log('worker received message', e.data);

  switch (e.data.type) {
    case SETUP:
      chunks = e.data.data.chunks.map((chunk: string[]) => chunk.map(getAffixId));
      combinations = e.data.data.combinations;
      thread_num = e.data.data.thread_num;
      total_threads = e.data.data.total_threads;
      break;

    case START:
      console.log('Worker start', chunks);
      start(e.data.data.isWasm);
      break;
    default:
      throw new Error('Unknown message type', e.data.type);
  }
};

async function start(wasm = false) {
  if (wasm) {
    // await wasm module initialization
    await init();

    // call wasm function with chunks and affixArray
    const data = calculate(
      JSON.stringify(chunks),
      JSON.stringify(
        // also adjust the settings to be usable by rust (we use c-like enums there)
        modifyCombinations(combinations),
        // only pick the values we are currently parsing
        // combinations.map((c) => ({
        //   profession: c.profession,
        //   specialization: c.specialization,
        //   weaponType: c.weaponType,
        //   forcedAffixes: c.forcedAffixes,
        //   rankby: c.rankby,
        //   minBoonDuration: c.minBoonDuration,
        //   minHealingPower: c.minHealingPower,
        //   minToughness: c.minToughness,
        //   maxToughness: c.maxToughness,
        //   minHealth: c.minHealth,
        //   minCritChance: c.minCritChance,
        //   minDamage: c.minDamage,
        //   minHealing: c.minHealing,
        //   minOutgoingHealing: c.minOutgoingHealing,
        //   minQuicknessDuration: c.minQuicknessDuration,
        //   minSurvivability: c.minSurvivability,
        //   maxResults: c.maxResults,
        //   primaryInfusion: c.primaryInfusion,
        //   secondaryInfusion: c.secondaryInfusion,
        //   primaryMaxInfusions: c.primaryMaxInfusions,
        //   secondaryMaxInfusions: c.secondaryMaxInfusions,
        //   maxInfusions: c.maxInfusions,
        //   distribution: c.distribution,
        //   attackRate: c.attackRate,
        //   movementUptime: c.movementUptime,
        //   gameMode: c.gameMode,

        //   infusionMode: c.infusionMode,
        //   identicalRing: c.identicalRing,
        //   identicalAcc: c.identicalAcc,
        //   identicalWep: c.identicalWep,
        //   identicalArmor: c.identicalArmor,
        //   slots: c.slots,
        //   runsAfterThisSlot: c.runsAfterThisSlot,
        //   affixesArray: c.affixesArray,
        //   affixStatsArray: c.affixStatsArray,
        //   baseAttributes: c.baseAttributes,
        //   modifiers: c.modifiers,
        //   disableCondiResultCache: c.disableCondiResultCache,
        //   relevantConditions: c.relevantConditions,
        // })),
      ),
      total_threads,
      thread_num,
    );

    postMessage({
      type: FINISHED,
      data: transformResults(JSON.parse(data || '[]'), combinations),
    });
  }
  // start JS run - currently not working
  // let counter = 0;
  // chunks.forEach((chunk) => {
  //   const affixes = combinations[0].settings?.affixesArray;
  //   if (!affixes) {
  //     throw new Error('No affixes');
  //   }

  //   descendSubtreeDFS(affixes, chunk, (_) => {
  //     // do something for the leaf node
  //     counter++;
  //   });
  // });

  // postMessage({
  //   type: FINISHED,
  //   data: { leafnodes: counter },
  // });
}
