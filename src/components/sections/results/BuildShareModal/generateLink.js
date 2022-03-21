import { compress } from '@discretize/object-compression';
import { changeCharacter } from '../../../../state/slices/buildPage';
import { BuildPageSchema } from '../../../url-state/schema/BuildPageSchema_v2';
import { buffsDict } from '../../../url-state/schema/SchemaDicts';

export default function generateLink(
  { character, profession, buffs, lines, selected, skills, weapons },
  onSuccess,
  dispatch,
) {
  const { attributes: allAttributes, gear, settings, infusions } = character;
  const { specialization, weaponType, extrasCombination } = settings;

  // filter out unnecessary attributes
  const attributes = {};
  Object.keys(BuildPageSchema.character.attributes).forEach((key) => {
    attributes[key] = allAttributes[key];
  });

  // since we cant use the compression library for object where the layout of keys is unknown, we stringify it.
  const minimalCharacter = {
    attributes,
    gear,
    infusions: JSON.stringify(infusions) || '',
    settings: {
      extrasCombination,
      profession,
      specialization,
      weaponType,
    },
  };
  dispatch(changeCharacter(minimalCharacter));

  // create bit map for buffs
  const conv = (val) => (val ? 1 : 0);
  const buffsInteger = buffsDict.reduce(
    // eslint-disable-next-line no-bitwise
    (acc, curr) => (acc + conv(buffs[curr])) << 1,
    conv(buffs[0]),
  );

  const object = {
    character: minimalCharacter,
    skills,
    traits: { lines, selected },
    weapons,
    buffs: buffsInteger,
  };

  compress({
    object,
    schema: BuildPageSchema,
    onSuccess,
  });
}
