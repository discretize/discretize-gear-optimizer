import { Box, Button, makeStyles, MenuItem, Select } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { Icon, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWeapon, getWeapons } from '../../../../state/slices/buildPage';
import { Classes, WEAPONS } from '../../../../utils/gw2-data';

const useStyles = makeStyles((theme) => ({
  weaponItem: {
    marginRight: theme.spacing(1),
  },
}));

export default function ModalContent({ character }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { mainhand1, mainhand2, offhand1, offhand2 } = useSelector(getWeapons);

  const { profession } = character.settings;
  const { weapons: useableWeapons } = Classes[profession];

  const handleChange = (e) => {
    console.log(e);
    dispatch(changeWeapon({ key: e.target.name, value: e.target.value }));
  };

  const getWeaponId = (weaponName) => {
    return WEAPONS[weaponName.toUpperCase()]?.gw2id;
  };

  return (
    <>
      <Box mb={1}>
        <Select value={mainhand1} name="mainhand1" onChange={handleChange}>
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }) => (
              <MenuItem value={getWeaponId(name)}>
                <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                {` ${name}`}
              </MenuItem>
            )),
          )}
        </Select>
        {useableWeapons.mainHand.find((w) => w.gw2id === mainhand1)?.type !== 'two-handed' && (
          <Select value={offhand1} name="offhand1" onChange={handleChange}>
            {React.Children.toArray(
              useableWeapons.offHand.map(({ name }) => (
                <MenuItem value={getWeaponId(name)}>
                  <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                  {` ${name}`}
                </MenuItem>
              )),
            )}
          </Select>
        )}
      </Box>
      <Box alignSelf="center">
        <Icon name="WeaponSwap" />
      </Box>
      <Box mb={2}>
        <Select value={mainhand2} name="mainhand2" onChange={handleChange}>
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }) => (
              <MenuItem value={getWeaponId(name)}>
                <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                {` ${name}`}
              </MenuItem>
            )),
          )}
        </Select>
        {useableWeapons.mainHand.find((w) => w.gw2id === mainhand2)?.type !== 'two-handed' && (
          <Select value={offhand2} name="offhand2" onChange={handleChange}>
            {React.Children.toArray(
              useableWeapons.offHand.map(({ name }) => (
                <MenuItem value={getWeaponId(name)}>
                  <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                  {` ${name}`}
                </MenuItem>
              )),
            )}
          </Select>
        )}
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShareIcon />}
        onClick={() => {
          // fixes the browser protection against window opening without any user interaction due to opening the window in a callback
          const windRef = window.open('', '_blank');
          dispatch({
            type: 'EXPORT_STATE_CHARACTER',
            onSuccess: (res) => {
              windRef.location.href = `/build?data=${res}`;
            },
          });
        }}
      >
        Open Build
      </Button>
    </>
  );
}
