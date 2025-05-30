import type { ModifierItem } from '../assets/modifierdata/metadata';
import type { Character } from '../state/optimizer/types/optimizerTypes';
import { JADE_BOT_CORE_IDS, mistAttunementData } from './gw2-data';

type AssumedBuff = Pick<ModifierItem, 'id' | 'gw2id' | 'type'>;

// eslint-disable-next-line import/prefer-default-export
export function createAssumedBuffs({
  buffsRaw,
  character,
}: {
  buffsRaw: ModifierItem[];
  character: Character;
}): AssumedBuff[] {
  const assumedBuffs = buffsRaw
    .filter((buff) => !buff.id.includes('jade-bot-'))
    .map(({ id, gw2id, type }) => ({ id, gw2id, type }));

  const jadeBotModifier = character.settings.appliedModifiers.find(
    (modifier) => modifier.id === 'jade-bot-per-tier',
  );
  let jadeBotTier = 0;
  if (jadeBotModifier) {
    if (jadeBotModifier.amount) {
      jadeBotTier = Number(jadeBotModifier.amount);
    } else {
      jadeBotTier = jadeBotModifier.amountData!.default;
    }
  }

  const hasJadeBot = !!(buffsRaw.find((buff) => buff.id === 'jade-bot-base') && jadeBotTier > 0);

  if (hasJadeBot)
    assumedBuffs.push({
      type: 'Item',
      id: 'jade-bot',
      gw2id: JADE_BOT_CORE_IDS[jadeBotTier - 1],
    });

  if (character.settings.appliedModifiers.find(({ id }) => id === 'omnipotion')) {
    assumedBuffs.push({ type: 'Item', id: 'omnipotion', gw2id: 79722 });
  }

  const mistAttunement = mistAttunementData.find(({ id }) =>
    character.settings.appliedModifiers.some((modifier) => modifier.id === id),
  );

  if (mistAttunement) {
    assumedBuffs.push({ type: 'Augmentation', id: mistAttunement.name, gw2id: undefined });
  }

  return assumedBuffs;
}
