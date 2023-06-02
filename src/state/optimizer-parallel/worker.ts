import init, { calculate } from 'wasm_module';
import { descendSubtreeDFS } from './affixTree';
import { FINISHED, SETUP, START } from './workerMessageTypes';

let chunks: number[][];
let combinations;

onmessage = (e) => {
  console.log('worker received message', e.data);

  switch (e.data.type) {
    case SETUP:
      chunks = e.data.data.chunks;
      combinations = e.data.data.combinations;
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
        combinations,
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
    );
    postMessage({
      type: FINISHED,
      data,
    });
    return;
  }
  // start JS run
  let counter = 0;
  chunks.forEach((chunk) => {
    descendSubtreeDFS(combinations[0].affixesArray, chunk, (leaf) => {
      // do something for the leaf node
      counter++;
    });
  });

  postMessage({
    type: FINISHED,
    data: { leafnodes: counter },
  });
}
