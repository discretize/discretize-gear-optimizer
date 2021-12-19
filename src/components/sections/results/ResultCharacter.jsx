import React from 'react';
import { Character, firstUppercase } from 'react-discretize-components';
import times from 'lodash/times';
import { getImage } from 'gatsby-plugin-image';
import { Classes, Defense, INFUSION_IDS } from '../../../utils/gw2-data';
import { resolveArmor, resolveBackAndTrinkets } from '../../../utils/map-gw2-ids';
import { extrasModifiersById } from '../../../assets/modifierdata';

export default function ResultCharacter({ data, character, weapons }) {
  const { profession, specialization, weaponType, cachedFormState } = character.settings;
  const { extras } = cachedFormState;

  const classData = Classes[profession].weapons;

  // Calculate weight class
  const { defense } = Classes[profession];
  let weight = 'Light';
  if (defense === Defense.HEAVY) {
    weight = 'Heavy';
  } else if (defense === Defense.MEDIUM) {
    weight = 'medium';
  }

  // Calculate infusions
  let infusions = [...Array(18).fill(49432)];

  if (character.infusions) {
    infusions = Object.keys(character.infusions).flatMap((key) =>
      times(character.infusions[key], () => INFUSION_IDS[key]),
    );
    // fill up the remaining slots with generic +9 Agony Infusions
    infusions = [
      ...infusions,
      // eslint-disable-next-line id-length
      ...times(18 - Object.values(character.infusions).reduce((p, c) => p + c), () => 49432),
    ];
  }

  // Calculate extras
  const {
    Sigil1: sigil1,
    Sigil2: sigil2,
    Enhancement: utility,
    Nourishment: food,
    Runes: runeStringId,
  } = extras;

  const foodId = extrasModifiersById[food]?.gw2id;
  const utilityId = extrasModifiersById[utility]?.gw2id;
  const sigil1Id = extrasModifiersById[sigil1]?.gw2id;
  const sigil2Id = extrasModifiersById[sigil2]?.gw2id;
  const rune = runeStringId ? extrasModifiersById[runeStringId] : '';
  const runeName = runeStringId ? rune.text.replace(/(Superior|Rune|of|the)/g, '').trim() : '';

  // Calculate the props for the weapons component
  let wea1;
  let wea2;
  let weaponPropsAPI;

  if (weaponType === 'Dual wield') {
    if (weapons) {
      wea1 = weapons.mainhand1;
      wea2 = weapons.offhand1;
    } else {
      wea1 = classData.mainHand.find((item) => item.type === 'one-handed').gw2id;
      wea2 = classData.offHand[0].gw2id;
    }

    weaponPropsAPI = {
      weapon1MainId: wea1,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions ? infusions[16] : null,
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1OffId: wea2,
      weapon1OffAffix: character.gear[13],
      weapon1OffInfusionId: infusions ? infusions[17] : null,
      weapon1OffSigilId: sigil2Id,
      weapon1OffSigil: firstUppercase(sigil2),
    };
  } else {
    if (weapons) wea1 = weapons.mainhand1;
    else wea1 = classData.mainHand.find((item) => item.type === 'two-handed').gw2id;
    weaponPropsAPI = {
      weapon1MainId: wea1,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainInfusion2Id: infusions[17],
      weapon1MainSigil2Id: sigil2Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1MainSigil2: firstUppercase(sigil2),
    };
  }

  // Calculate armor props
  const { gear, attributes } = character;
  const runeId = rune.gw2id;
  const armorPropsAPI = resolveArmor({
    weight,
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
  });

  // Calculate back and trinkets props
  const backAndTrinketPropsAPI = resolveBackAndTrinkets({
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
  });

  // Find right image
  const imageData = data.images.edges.flatMap((image) => image.node);

  const imageRaw =
    imageData.find((image) => image.original.src.includes(specialization.toLowerCase())) ||
    imageData.find((image) => image.original.src.includes(profession.toLowerCase()));
  const image = getImage(imageRaw);

  return (
    <Character
      profession={profession}
      attributes={attributes}
      armorPropsAPI={armorPropsAPI}
      weaponPropsAPI={weaponPropsAPI}
      backAndTrinketPropsAPI={backAndTrinketPropsAPI}
      consumablesPropsAPI={{ foodId, utilityId }}
      imageData={image}
    />
  );
}
