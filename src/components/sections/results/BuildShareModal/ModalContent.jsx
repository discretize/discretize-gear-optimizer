import { Error, Icon, Item, Progress } from '@discretize/gw2-ui-new';
import { firstUppercase } from '@discretize/react-discretize-components';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, ButtonGroup, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changeWeapon, getSkills, getWeapons } from '../../../../state/slices/buildPage';
import { Classes, WEAPONS } from '../../../../utils/gw2-data';
import SkillSelect from './SkillSelect';

const useStyles = makeStyles()((theme) => ({
  weaponItem: {
    marginRight: theme.spacing(1),
  },
  weaponSelect: {
    width: 160,
    marginRight: theme.spacing(1),
  },
  skillSelect: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(0.5),
  },
}));

export default function ModalContent({ character, buttons }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { t } = useTranslation();

  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);

  const { mainhand1, mainhand2, offhand1, offhand2 } = weapons;
  const { healId, utility1Id, utility2Id, utility3Id, eliteId } = skills;

  const [state, setState] = React.useState({ skills: undefined, error: undefined });
  const [buttonState, setButtonState] = React.useState(new Array(buttons.length));

  const { profession } = character.settings;
  const { weapons: useableWeapons } = Classes[profession];

  const handleChangeWeapon = (e) => {
    if (
      useableWeapons.mainHand.find((weapon) => weapon.gw2id === e.target.value)?.type ===
      'two-handed'
    ) {
      if (e.target.name === 'mainhand1') dispatch(changeWeapon({ key: 'offhand1', value: '' }));
      if (e.target.name === 'mainhand2') dispatch(changeWeapon({ key: 'offhand2', value: '' }));
    }
    dispatch(changeWeapon({ key: e.target.name, value: e.target.value }));
  };

  const getWeaponId = (weaponName) => {
    return WEAPONS[weaponName.toUpperCase().replace(' ', '')]?.gw2id;
  };

  React.useEffect(() => {
    axios
      .get(`https://api.guildwars2.com/v2/professions/${firstUppercase(profession)}`)
      .then((res) => setState({ error: undefined, skills: res.data.skills }))
      .catch((e) => {
        console.error(e);
        setState({ error: e.message });
        return null;
      });
  }, [profession]);

  const isLoading = !state.error && !state.skills;
  return (
    <>
      <Typography>{t('Select weapons:')}</Typography>
      <Box sx={{ mb: 1 }}>
        <Select
          variant="standard"
          value={mainhand1}
          name="mainhand1"
          onChange={handleChangeWeapon}
          className={classes.weaponSelect}
        >
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }, index) => (
              <MenuItem key={`${name}${index.toString()}`} value={getWeaponId(name)}>
                <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                {` ${name}`}
              </MenuItem>
            )),
          )}
        </Select>
        {useableWeapons.mainHand.find((weapon) => weapon.gw2id === mainhand1)?.type !==
          'two-handed' && (
          <Select
            variant="standard"
            value={offhand1}
            name="offhand1"
            onChange={handleChangeWeapon}
            className={classes.weaponSelect}
          >
            {React.Children.toArray(
              useableWeapons.offHand.map(({ name }) => (
                <MenuItem key={name} value={getWeaponId(name)}>
                  <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                  {` ${name}`}
                </MenuItem>
              )),
            )}
          </Select>
        )}
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Icon name="WeaponSwap" />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Select
          variant="standard"
          value={mainhand2}
          name="mainhand2"
          onChange={handleChangeWeapon}
          className={classes.weaponSelect}
        >
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }) => (
              <MenuItem key={name} value={getWeaponId(name)}>
                <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                {` ${name}`}
              </MenuItem>
            )),
          )}
        </Select>
        {useableWeapons.mainHand.find((weapon) => weapon.gw2id === mainhand2)?.type !==
          'two-handed' && (
          <Select
            variant="standard"
            value={offhand2}
            name="offhand2"
            onChange={handleChangeWeapon}
            className={classes.weaponSelect}
          >
            {React.Children.toArray(
              useableWeapons.offHand.map(({ name }) => (
                <MenuItem key={name} value={getWeaponId(name)}>
                  <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                  {` ${name}`}
                </MenuItem>
              )),
            )}
          </Select>
        )}
      </Box>

      <Typography>{t('Select skills:')}</Typography>

      <Box sx={{ mb: 2 }}>
        {isLoading && <Progress />}
        {state.error && <Error name="ERROR" message={state.error} />}
        {state.skills && (
          <>
            <SkillSelect
              name="healId"
              value={healId}
              skillList={state.skills.filter((skill) => skill.type === 'Heal')}
            />
            <SkillSelect
              name="utility1Id"
              value={utility1Id}
              skillList={state.skills.filter((skill) => skill.type === 'Utility')}
            />
            <SkillSelect
              name="utility2Id"
              value={utility2Id}
              skillList={state.skills.filter((skill) => skill.type === 'Utility')}
            />
            <SkillSelect
              name="utility3Id"
              value={utility3Id}
              skillList={state.skills.filter((skill) => skill.type === 'Utility')}
            />
            <SkillSelect
              name="eliteId"
              value={eliteId}
              skillList={state.skills.filter((skill) => skill.type === 'Elite')}
            />
          </>
        )}
      </Box>

      <ButtonGroup variant="contained" color="primary">
        {buttons.map(({ label, icon: ButtonIcon, onClick }, index) => (
          <Button
            key={label}
            startIcon={buttonState[index] ? <DoneIcon /> : <ButtonIcon />}
            disabled={buttonState[index]}
            onClick={() => {
              const newState = [...buttonState];
              newState[index] = true;
              setButtonState(newState);

              setTimeout(() => {
                const tmpState = [...buttonState];
                tmpState[index] = false;
                setButtonState(tmpState);
              }, 3000);
              onClick();
            }}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}
