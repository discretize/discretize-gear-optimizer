import { Typography, withStyles } from '@material-ui/core';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getControl,
  getExtra,
  getExtras,
  getModifiers,
  getPriority,
  getProfession,
} from '../../state/gearOptimizerSlice';
import { Classes, Defense, INFUSIONS } from '../../utils/gw2-data';
import Character from '../gw2/Character';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import SpecialDurations from './SpecialDurations';

const styles = (theme) => ({});

const ResultDetails = ({ classes, data, buffData }) => {
  const selected = useSelector(getControl('selected'));
  const character = useSelector(getControl('list'))[selected];

  const extras = useSelector(getExtras);
  const profession = useSelector(getProfession);
  const sigil1 = useSelector(getExtra('Sigil1'));
  const sigil2 = useSelector(getExtra('Sigil2'));
  const priority = useSelector(getPriority('weaponType'));
  const modifiers = useSelector(getModifiers);

  if (selected === '' || character === undefined) {
    return null;
  }

  const classData = Classes[profession.toLowerCase()].weapons;

  const { defense } = Classes[profession.toLowerCase()];
  let weight = 'Light';
  if (defense === Defense.HEAVY) {
    weight = 'Heavy';
  } else if (defense === Defense.MEDIUM) {
    weight = 'medium';
  }

  const infusions =
    'infusions' in character
      ? Object.keys(character.infusions)
          .map((key) =>
            // eslint-disable-next-line no-undef
            _.times(
              character.infusions[key],
              () => INFUSIONS.find((infu) => infu.attribute === key).id,
            ),
          )
          .flatMap((e) => e)
      : [];

  const sigilData = data.sigils.list.flatMap((l) => l.items);
  let sigil1Id = sigilData.find((d) => d.id === sigil1);
  sigil1Id = sigil1Id ? sigil1Id.gw2_id : undefined;
  let sigil2Id = sigilData.find((d) => d.id === sigil2);
  sigil2Id = sigil2Id ? sigil2Id.gw2_id : undefined;

  let wea1, wea2, weapData;
  if (priority === 'Dual wield') {
    wea1 = classData.mainHand.find((d) => d.type === 'one-handed');
    [wea2] = classData.offHand;
    console.log(character.gear);
    weapData = {
      weapon1MainId: wea1.gw2_id,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions ? infusions[16] : null,
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainSigil1: sigil1,
      weapon1OffId: wea2.gw2_id,
      weapon1OffAffix: character.gear[13],
      weapon1OffInfusionId: infusions ? infusions[17] : null,
      weapon1OffSigilId: sigil2Id,
      weapon1OffSigil: sigil2,
    };
  } else {
    wea1 = classData.mainHand.find((d) => d.type === 'two-handed');
    weapData = {
      weapon1MainId: wea1.gw2_id,
      weapon1MainInfusion1Id: infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainInfusion2Id: infusions[17],
      weapon1MainSigil2Id: sigil2Id,
      weapon1MainSigil1: sigil1,
      weapon1MainSigil2: sigil2,
    };
  }

  const rune = extras.Runes
    ? data.runes.list.flatMap((r) => r.items).find((r) => r.id === extras.Runes)
    : '';
  const runeName = extras.Runes ? rune.text.split(' ')[rune.text.split(' ').length - 1] : '';

  const image = getImage(data[`${profession.toLowerCase()}Picture`]);

  return (
    <div>
      <Typography variant="h5">Character</Typography>
      <Character
        weight={weight}
        character={character}
        profession={profession}
        infusions={infusions}
        runeId={rune.gw2_id}
        runeName={runeName}
        image={image}
        weapons={weapData}
      />

      <SpecialDurations data={character.attributes} />

      <AffixesStats data={character.gearStats} />

      <AppliedModifiers data={modifiers} buffData={buffData} />
    </div>
  );
};

export default withStyles(styles)(ResultDetails);
