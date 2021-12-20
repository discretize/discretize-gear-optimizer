import { Box, Button, makeStyles, MenuItem, Select } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import axios from 'axios';
import { Icon, Item, Skill } from 'gw2-ui-bulk';
import React from 'react';
import { firstUppercase, NoSelection } from 'react-discretize-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSkill,
  changeWeapon,
  getSkills,
  getWeapons,
} from '../../../../state/slices/buildPage';
import { Classes, WEAPONS } from '../../../../utils/gw2-data';

const useStyles = makeStyles((theme) => ({
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

export default function ModalContent({ character }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { mainhand1, mainhand2, offhand1, offhand2 } = useSelector(getWeapons);
  const { healId, utility1Id, utility2Id, utility3Id, eliteId } = useSelector(getSkills);

  const [apiSkills, setApiSkills] = React.useState(null);

  const { profession } = character.settings;
  const { weapons: useableWeapons } = Classes[profession];

  const handleChangeWeapon = (e) => {
    if (useableWeapons.mainHand.find((w) => w.gw2id === e.target.value)?.type === 'two-handed') {
      if (e.target.name === 'mainhand1') dispatch(changeWeapon({ key: 'offhand1', value: '' }));
      if (e.target.name === 'mainhand2') dispatch(changeWeapon({ key: 'offhand2', value: '' }));
    }

    dispatch(changeWeapon({ key: e.target.name, value: e.target.value }));
  };

  const handleChangeSkill = (e) => {
    dispatch(changeSkill({ key: e.target.name, value: e.target.value }));
  };

  const getWeaponId = (weaponName) => {
    return WEAPONS[weaponName.toUpperCase()]?.gw2id;
  };

  React.useEffect(() => {
    axios
      .get(`https://api.guildwars2.com/v2/professions/${firstUppercase(profession)}`)
      .then((res) => setApiSkills(res.data.skills));
  }, [profession]);

  function SkillSelect(name, value, skillList) {
    return (
      <Select
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
      <Box mb={1}>
        <Select
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
        {useableWeapons.mainHand.find((w) => w.gw2id === mainhand1)?.type !== 'two-handed' && (
          <Select
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
        {useableWeapons.mainHand.find((w) => w.gw2id === mainhand2)?.type !== 'two-handed' && (
          <Select
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
