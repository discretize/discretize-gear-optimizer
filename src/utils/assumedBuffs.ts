import { JADE_BOT_CORE_IDS } from './gw2-data';

// eslint-disable-next-line import/prefer-default-export
export function createAssumedBuffs({ buffsRaw, character, gameMode }) {
  let assumedBuffs = buffsRaw;

  const jadeBotModifier = character.settings.appliedModifiers.find(
    (modifier) => modifier.id === 'jade-bot-per-tier',
  );
  let jadeBotTier = 0;
  if (jadeBotModifier) {
    if (jadeBotModifier.amount) {
      jadeBotTier = jadeBotModifier.amount;
    } else {
      jadeBotTier = jadeBotModifier.amountData.default;
    }
  }

  const hasJadeBot = !!(
    assumedBuffs.find((buff) => buff.id === 'jade-bot-base') && jadeBotTier > 0
  );

  assumedBuffs = hasJadeBot
    ? assumedBuffs
        .concat({ type: 'Item', id: 'jade-bot', gw2id: JADE_BOT_CORE_IDS[jadeBotTier - 1] })
        .filter((buff) => !buff.id.includes('jade-bot-'))
    : assumedBuffs;
  if (gameMode === 'fractals')
    assumedBuffs = assumedBuffs.concat({ type: 'Item', id: 'omnipotion', gw2id: 79722 });
  // remap
  assumedBuffs = assumedBuffs.map(({ id, gw2id, type }) => ({ id, gw2id, type }));

  return assumedBuffs;
}
