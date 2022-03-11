import { Character, firstUppercase } from '@discretize/react-discretize-components';
import { getImage } from 'gatsby-plugin-image';
import times from 'lodash/times';
import React from 'react';
import { allExtrasModifiersById } from '../../../assets/modifierdata';
import { Classes, INFUSION_IDS } from '../../../utils/gw2-data';
import { resolveArmor, resolveBackAndTrinkets } from '../../../utils/map-gw2-ids';
import { getWeight } from '../../../utils/usefulFunctions';
import ErrorBoundary from '../../baseComponents/ErrorBoundary';

export default function ResultCharacter({ data, character, weapons, skills, assumedBuffs }) {
  const { profession, specialization, weaponType, cachedFormState } = character.settings;
  const { extras } = cachedFormState;

  const classData = Classes[profession].weapons;

  // Calculate weight class
  const weight = getWeight(profession);

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

  const foodId = allExtrasModifiersById[food]?.gw2id;
  const utilityId = allExtrasModifiersById[utility]?.gw2id;
  const sigil1Id = allExtrasModifiersById[sigil1]?.gw2id;
  const sigil2Id = allExtrasModifiersById[sigil2]?.gw2id;
  const rune = runeStringId ? allExtrasModifiersById[runeStringId] : undefined;
  const runeName = runeStringId
    ? rune.text.replace(/(Superior|Rune|of|the)/g, '').trim()
    : undefined;

  // Calculate the props for the weapons component
  let wea1;
  let wea2;
  let weaponPropsAPI;

  if (weapons) {
    weaponPropsAPI = {
      weapon1MainId: weapons.mainhand1,
      weapon1OffId: weapons.offhand1,
      weapon2MainId: weapons.mainhand2,
      weapon2OffId: weapons.offhand2,
      weapon1MainAffix: character.gear[12],
      weapon2MainAffix: character.gear[12],
      weapon1OffAffix: character.gear[13],
      weapon2OffAffix: character.gear[13],
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon2MainSigil1: firstUppercase(sigil1),
      weapon1OffSigil: firstUppercase(sigil2),
      weapon2OffSigil: firstUppercase(sigil2),
      weapon1MainSigil1Id: sigil1Id,
      weapon2MainSigil1Id: sigil1Id,
      weapon1OffSigilId: sigil2Id,
      weapon2OffSigilId: sigil2Id,
      weapon1MainInfusion1Id: infusions[16],
      weapon2MainInfusion1Id: infusions[16],
      weapon1OffInfusionId: infusions ? infusions[17] : null,
      weapon2OffInfusionId: infusions ? infusions[17] : null,
    };

    if (!weapons.offhand1) {
      weaponPropsAPI = {
        ...weaponPropsAPI,
        weapon1MainSigil2: firstUppercase(sigil2),
        weapon1MainSigil2Id: sigil2Id,
        weapon1MainInfusion2Id: infusions[17],
      };
    }
    if (!weapons.offhand2) {
      weaponPropsAPI = {
        ...weaponPropsAPI,
        weapon2MainSigil2: firstUppercase(sigil2),
        weapon2MainSigil2Id: sigil2Id,
        weapon2MainInfusion2Id: infusions[17],
      };
    }
  } else if (weaponType === 'Dual wield') {
    wea1 = classData.mainHand.find((item) => item.type === 'one-handed').gw2id;
    wea2 = classData.offHand[0].gw2id;

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
    wea1 = classData.mainHand.find((item) => item.type === 'two-handed').gw2id;
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
  const runeId = rune ? rune.gw2id : undefined;
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

  let skillsPropsAPI;
  if (skills) {
    skillsPropsAPI = skills;
  }

  // Find right image
  const imageData = data.images.edges.flatMap((image) => image.node);

  const imageRaw =
    (specialization &&
      imageData.find((image) => image.original.src.includes(specialization.toLowerCase()))) ||
    (profession &&
      imageData.find((image) => image.original.src.includes(profession.toLowerCase())));
  const image = getImage(imageRaw);

  return (
    <ErrorBoundary location="Character" resetKeys={[character]}>
      <Character
        profession={profession}
        attributes={attributes}
        armorPropsAPI={armorPropsAPI}
        weaponPropsAPI={weaponPropsAPI}
        backAndTrinketPropsAPI={backAndTrinketPropsAPI}
        consumablesPropsAPI={{ foodId, utilityId }}
        skillsPropsAPI={skillsPropsAPI}
        assumedBuffs={assumedBuffs}
        imageData={image}
      />
    </ErrorBoundary>
  );
}
