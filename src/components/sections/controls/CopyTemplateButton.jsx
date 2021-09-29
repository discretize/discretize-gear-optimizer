/* eslint-disable id-length */
import { Button, MenuItem, Select, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Icon } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector } from 'react-redux';
import { getProfession } from '../../../state/gearOptimizerSlice';
import { Classes } from '../../../utils/gw2-data';

const CopyTemplateButton = ({ extras: extrasIds, data, infusions, weight, runeId, runeName }) => {
  const [open, setOpen] = React.useState(false);
  const [w11, setw11] = React.useState('');
  const [w12, setw12] = React.useState('');
  const [w21, setw21] = React.useState('');
  const [w22, setw22] = React.useState('');

  const profession = useSelector(getProfession);
  const { sigil1Id, sigil2Id, foodId, utilityId } = extrasIds;

  const handleClick = () => {
    setOpen(true);

    const { gear, attributes } = data;
    const weapData = {
      ...(w11 && { weapon1MainType: w11 }),
      ...(w11 && { weapon1MainSigil1Id: sigil1Id }),
      ...(!w12 && { weapon1MainSigil2Id: sigil2Id }),
      ...(w12 && { weapon1OffType: w12 }),
      ...(w12 && { weapon1OffSigilId: sigil2Id }),

      ...(w21 && { weapon2MainType: w21 }),
      ...(w21 && { weapon2MainSigil1Id: sigil1Id }),
      ...(!w22 && { weapon2MainSigil2Id: sigil2Id }),

      ...(w22 && { weapon2OffType: w22 }),
      ...(w22 && { weapon2OffSigilId: sigil2Id }),
    };

    const consumables = { foodId, utilityId, infusion: 'Mighty +9 Agony Infusion' };

    const template = {
      profession,
      gear,
      attributes,
      infusions,
      weight,
      runeId,
      runeName,
      weapons: weapData,
      consumables,
      skills: { heal: '', utility1: '', utility2: '', utility3: '', elite: '' },
    };

    navigator.clipboard.writeText(JSON.stringify(template, null, 2));
  };

  const { weapons: useableWeapons } = Classes[profession.toLowerCase()];

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
          Copied to clipboard!
        </Alert>
      </Snackbar>
      <Select value={w11} onChange={(e) => setw11(e.target.value)}>
        {React.Children.toArray(
          useableWeapons.mainHand.map((w) => <MenuItem value={w.name}>{w.name}</MenuItem>),
        )}
      </Select>
      {useableWeapons.mainHand.find((w) => w.name === w11)?.type !== 'two-handed' && (
        <Select value={w12} onChange={(e) => setw12(e.target.value)}>
          {React.Children.toArray(
            useableWeapons.offHand.map((w) => <MenuItem value={w.name}>{w.name}</MenuItem>),
          )}
        </Select>
      )}
      <Icon name="WeaponSwap" />

      <Select value={w21} onChange={(e) => setw21(e.target.value)}>
        {React.Children.toArray(
          useableWeapons.mainHand.map((w) => <MenuItem value={w.name}>{w.name}</MenuItem>),
        )}
      </Select>
      {useableWeapons.mainHand.find((w) => w.name === w21)?.type !== 'two-handed' && (
        <Select value={w22} onChange={(e) => setw22(e.target.value)}>
          {React.Children.toArray(
            useableWeapons.offHand.map((w) => <MenuItem value={w.name}>{w.name}</MenuItem>),
          )}
        </Select>
      )}

      <Button variant="contained" color="primary" onClick={handleClick} style={{ margin: 8 }}>
        Copy to clipboard
      </Button>
    </>
  );
};

export default CopyTemplateButton;
