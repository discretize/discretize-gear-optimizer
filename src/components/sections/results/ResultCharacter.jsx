/* eslint-disable react/no-unescaped-entities */
import { Character, firstUppercase } from '@discretize/react-discretize-components';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';
import { allExtrasModifiersById } from '../../../assets/modifierdata';
import { Classes, INFUSION_IDS, WeaponTypes, getWeight } from '../../../utils/gw2-data';
import ErrorBoundary from '../../baseComponents/ErrorBoundary';
import Info from '../../baseComponents/Info';

const CustomSwitch = ({ onChange, label }) => (
  <FormControlLabel control={<Switch onChange={onChange} />} label={label} />
);

export default function ResultCharacter({
  character,
  weapons = undefined,
  skills = undefined,
  assumedBuffs,
}) {
  const { profession, specialization, weaponType, cachedFormState, extrasCombination } =
    character.settings;

  const classData = Classes[profession].weapons;

  // Calculate weight class
  const weight = getWeight(profession);

  // Calculate infusions
  let infusions = [...Array(18).fill(49432)];

  if (character.infusions) {
    infusions = Object.keys(character.infusions).flatMap((key) => [
      ...Array(character.infusions[key]).fill(INFUSION_IDS[key]),
    ]);
    // fill up the remaining slots with generic +9 Agony Infusions
    infusions = [...infusions, ...Array(18).fill(49432)].slice(0, 18);
  }

  // Calculate extras
  const {
    Sigil1: sigil1,
    Sigil2: sigil2,
    Enhancement: utility,
    Nourishment: food,
    Runes: runeStringId,
    Relics: relics,
  } = extrasCombination || cachedFormState.extras; // fallback for builds from before extras refactor

  const foodId = allExtrasModifiersById[food]?.gw2id;
  const utilityId = allExtrasModifiersById[utility]?.gw2id;
  const sigil1Id = allExtrasModifiersById[sigil1]?.gw2id;
  const sigil2Id = allExtrasModifiersById[sigil2]?.gw2id;
  const rune = runeStringId ? allExtrasModifiersById[runeStringId] : undefined;
  const isExotic = (index) =>
    cachedFormState?.priorities?.exotics?.data?.[character.gear[index]]?.[index];
  const getRarity = (index) => (isExotic(index) ? 'Exotic' : 'Ascended');
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
      weapon1MainRarity: getRarity(12),
      weapon1OffRarity: getRarity(12),
      weapon2MainRarity: getRarity(13),
      weapon2OffRarity: getRarity(13),
      weapon1MainSigil1Id: sigil1Id,
      weapon2MainSigil1Id: sigil1Id,
      weapon1OffSigilId: sigil2Id,
      weapon2OffSigilId: sigil2Id,
      weapon1MainInfusion1Id: isExotic(12) ? null : infusions[16],
      weapon2MainInfusion1Id: isExotic(13) ? null : infusions[16],
      weapon1OffInfusionId: isExotic(12) ? null : infusions[17],
      weapon2OffInfusionId: isExotic(13) ? null : infusions[17],
    };

    if (!weapons.offhand1) {
      weaponPropsAPI = {
        ...weaponPropsAPI,
        weapon1MainSigil2Id: sigil2Id,
        weapon1MainInfusion2Id: isExotic(12) ? null : infusions[17],
      };
    }
    if (!weapons.offhand2) {
      weaponPropsAPI = {
        ...weaponPropsAPI,
        weapon2MainSigil2Id: sigil2Id,
        weapon2MainInfusion2Id: isExotic(13) ? null : infusions[17],
      };
    }
  } else if (weaponType === WeaponTypes.dualWield) {
    wea1 = classData.mainHand.find((item) => item.type === 'one-handed');
    [wea2] = classData.offHand;

    weaponPropsAPI = {
      weapon1MainId: isExotic(12) ? undefined : wea1.gw2id,
      weapon1MainType: wea1.name,
      weapon1MainAffix: character.gear[12],
      weapon1MainRarity: getRarity(12),
      weapon1MainInfusion1Id: isExotic(12) ? null : infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1OffId: isExotic(13) ? null : wea2.gw2id,
      weapon1OffType: wea2.name,
      weapon1OffAffix: character.gear[13],
      weapon1OffRarity: getRarity(13),
      weapon1OffInfusionId: isExotic(13) ? null : infusions[17],
      weapon1OffSigilId: sigil2Id,
    };
  } else {
    wea1 = classData.mainHand.find((item) => item.type === 'two-handed');
    weaponPropsAPI = {
      weapon1MainId: isExotic(12) ? undefined : wea1.gw2id,
      weapon1MainType: wea1.name,
      weapon1MainAffix: character.gear[12],
      weapon1MainRarity: getRarity(12),
      weapon1MainInfusion1Id: isExotic(12) ? null : infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainInfusion2Id: isExotic(12) ? null : infusions[17],
      weapon1MainSigil2Id: sigil2Id,
    };
  }

  // Calculate armor props
  const { gear, attributes, results: { unbuffedAttributes } = {} } = character;
  const runeId = rune ? rune.gw2id : undefined;
  const armorPropsAPI = {
    weight: firstUppercase(weight),
    helmAffix: gear[0],
    helmRarity: getRarity(0),
    helmRuneId: runeId,
    helmInfusionId: isExotic(0) ? null : infusions[0],
    shouldersAffix: gear[1],
    shouldersRarity: getRarity(1),
    shouldersRuneId: runeId,
    shouldersInfusionId: isExotic(1) ? null : infusions[1],
    coatAffix: gear[2],
    coatRarity: getRarity(2),
    coatRuneId: runeId,
    coatInfusionId: isExotic(2) ? null : infusions[2],
    glovesAffix: gear[3],
    glovesRarity: getRarity(3),
    glovesRuneId: runeId,
    glovesInfusionId: isExotic(3) ? null : infusions[3],
    leggingsAffix: gear[4],
    leggingsRarity: getRarity(4),
    leggingsRuneId: runeId,
    leggingsInfusionId: isExotic(4) ? null : infusions[4],
    bootsAffix: gear[5],
    bootsRarity: getRarity(5),
    bootsRuneId: runeId,
    bootsInfusionId: isExotic(5) ? null : infusions[5],
  };

  // Calculate back and trinkets props
  const backAndTrinketPropsAPI = {
    backItemAffix: gear[11],
    backItemRarity: getRarity(11),
    backItemInfusion1Id: isExotic(11) ? null : infusions[6],
    backItemInfusion2Id: isExotic(11) ? null : infusions[7],
    amuletAffix: gear[6],
    amuletRarity: getRarity(6),
    ring1Affix: gear[7],
    ring1Rarity: getRarity(7),
    ring1Infusion1Id: isExotic(7) ? null : infusions[8],
    ring1Infusion2Id: isExotic(7) ? null : infusions[9],
    ring1Infusion3Id: isExotic(7) ? null : infusions[10],
    ring2Affix: gear[8],
    ring2Rarity: getRarity(8),
    ring2Infusion1Id: isExotic(8) ? null : infusions[11],
    ring2Infusion2Id: isExotic(8) ? null : infusions[12],
    ring2Infusion3Id: isExotic(8) ? null : infusions[13],
    accessory1Affix: gear[9],
    accessory1Rarity: getRarity(9),
    accessory1InfusionId: isExotic(9) ? null : infusions[14],
    accessory2Affix: gear[10],
    accessory2Rarity: getRarity(10),
    accessory2InfusionId: isExotic(10) ? null : infusions[15],
  };

  let skillsPropsAPI;
  if (skills) {
    skillsPropsAPI = skills;
  }

  const relicId = allExtrasModifiersById[relics]?.gw2id;

  const [showUnbuffed, setShowUnbuffed] = useState(false);

  return (
    <ErrorBoundary location="Character" resetKeys={[character]}>
      {unbuffedAttributes && (
        <>
          <FormControlLabel
            control={
              <Switch
                checked={showUnbuffed}
                onChange={(e) => setShowUnbuffed(e.target.checked)}
                name="checked"
                color="primary"
              />
            }
            label="Simulate Unbuffed Attributes"
          />

          {showUnbuffed && (
            <Box sx={{ p: 1 }}>
              <Info icon={<WarningAmberIcon />}>
                Simulated unbuffed attributes are not exact and may not match ingame hero panel! For
                example, soulbeast's "with axe" and "with torch/dagger" buffs are both included,
                simulating a scenario which doesn't occur in either weapon set on some builds. Use
                with caution.
              </Info>
            </Box>
          )}
        </>
      )}

      <Character
        attributes={{ profession, data: (showUnbuffed && unbuffedAttributes) || attributes }}
        armor={armorPropsAPI}
        weapon={weaponPropsAPI}
        backAndTrinket={backAndTrinketPropsAPI}
        consumables={{ foodId, utilityId, relicId }}
        skills={skillsPropsAPI}
        assumedBuffs={{ value: assumedBuffs }}
        imageElement={
          <img
            src={`${
              import.meta.env.BASE_URL
            }images/professions/${specialization.toLowerCase()}.png`}
            alt="Profession"
          />
        }
        switchElement={CustomSwitch}
      />
    </ErrorBoundary>
  );
}
