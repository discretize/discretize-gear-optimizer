import { firstUppercase, NoSelection } from '@discretize/react-discretize-components';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import { Icon, Item, Skill } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getBuffs } from '../../../../state/slices/buffs';
import {
  changeSkill,
  changeWeapon,
  getSkills,
  getWeapons,
} from '../../../../state/slices/buildPage';
import { Classes, WEAPONS } from '../../../../utils/gw2-data';

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

export default function ModalContent({ character, onClick }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const weapons = useSelector(getWeapons);
  const { mainhand1, mainhand2, offhand1, offhand2 } = weapons;
  const skills = useSelector(getSkills);
  const { healId, utility1Id, utility2Id, utility3Id, eliteId } = skills;
  const lines = character.settings.cachedFormState.traits.selectedLines;
  const selected = character.settings.cachedFormState.traits.selectedTraits;
  const { buffs } = character.settings.cachedFormState.buffs;

  const [apiSkills, setApiSkills] = React.useState(null);

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
    console.log(e);
    dispatch(changeWeapon({ key: e.target.name, value: e.target.value }));
  };

  const handleChangeSkill = (e) => {
    dispatch(changeSkill({ key: e.target.name, value: e.target.value }));
  };

  const getWeaponId = (weaponName) => {
    return WEAPONS[weaponName.toUpperCase().replace(' ', '')]?.gw2id;
  };

  React.useEffect(() => {
    axios
      .get(`https://api.guildwars2.com/v2/professions/${firstUppercase(profession)}`)
      .then((res) => setApiSkills(res.data.skills));
  }, [profession]);

  function SkillSelect(name, value, skillList) {
    return (
      <Select
        variant="standard"
        value={value}
        name={name}
        onChange={handleChangeSkill}
        className={classes.skillSelect}
        renderValue={(skill) =>
          skill === '' ? (
            <div style={{ fontSize: 60, lineHeight: 0 }}>
              <NoSelection />
            </div>
          ) : (
            <Skill id={skill} disableText style={{ fontSize: 60, lineHeight: 0 }} />
          )
        }
        displayEmpty
      >
        {skillList.map((skill) => (
          <MenuItem value={skill.id} key={skill.id}>
            <Skill
              id={skill.id}
              disableLink
              disableText
              style={{ marginRight: 4, fontSize: '1.2rem' }}
            />
            <Skill id={skill.id} disableLink disableTooltip disableIcon />
          </MenuItem>
        ))}
      </Select>
    );
  }

  return (
    <>
      <Typography>Select weapons:</Typography>
      <Box mb={1}>
        <Select
          variant="standard"
          value={mainhand1}
          name="mainhand1"
          onChange={handleChangeWeapon}
          className={classes.weaponSelect}
        >
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }) => (
              <MenuItem value={getWeaponId(name)}>
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
        <Select
          variant="standard"
          value={mainhand2}
          name="mainhand2"
          onChange={handleChangeWeapon}
          className={classes.weaponSelect}
        >
          {React.Children.toArray(
            useableWeapons.mainHand.map(({ name }) => (
              <MenuItem value={getWeaponId(name)}>
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
                <MenuItem value={getWeaponId(name)}>
                  <Item id={getWeaponId(name)} disableText className={classes.weaponItem} />
                  {` ${name}`}
                </MenuItem>
              )),
            )}
          </Select>
        )}
      </Box>

      <Typography>Select skills:</Typography>

      <Box mb={1}>
        {apiSkills && (
          <>
            {SkillSelect(
              'healId',
              healId,
              apiSkills.filter((skill) => skill.type === 'Heal'),
            )}
            {SkillSelect(
              'utility1Id',
              utility1Id,
              apiSkills.filter((skill) => skill.type === 'Utility'),
            )}
            {SkillSelect(
              'utility2Id',
              utility2Id,
              apiSkills.filter((skill) => skill.type === 'Utility'),
            )}
            {SkillSelect(
              'utility3Id',
              utility3Id,
              apiSkills.filter((skill) => skill.type === 'Utility'),
            )}
            {SkillSelect(
              'eliteId',
              eliteId,
              apiSkills.filter((skill) => skill.type === 'Elite'),
            )}
          </>
        )}
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<ShareIcon />}
        onClick={() => onClick({ profession, buffs, lines, selected, skills, weapons })}
      >
        Open Build
      </Button>
    </>
  );
}
