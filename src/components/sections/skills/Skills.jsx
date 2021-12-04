import { Typography, withStyles, Box } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Skill } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills, toggleSkill, setSkillAmount } from '../../../state/slices/skills';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import AmountInput from '../../baseComponents/AmountInput';

const styles = (theme) => ({
  text: {
    color: '#ddd !important',
  },
  label: {
    display: 'flex',
  },
  subText: {
    fontWeight: 200,
  },
  skill: {
    marginRight: theme.spacing(1),
  },
  checkbox: {},
});

const Skills = ({ classes, data }) => {
  const dispatch = useDispatch();
  const skillState = useSelector(getSkills);

  const { t } = useTranslation();

  const handleCheckboxChange = (id) => (e) => {
    dispatch(toggleSkill({ id, enabled: e.target.checked }));
  };

  const handleAmountChange = (id) => (e) => {
    dispatch(setSkillAmount({ id, amount: e.target.value }));
  };

  if (!data || data.length < 1) {
    return t('This class does not appear to have skills with extra buffs');
  }

  return data.map((skill) => {
    const { id, gw2id, subText, amountData } = skill;
    const enabled = Boolean(skillState[id]);
    const amount = skillState[id]?.amount || '';
    return (
      <Box key={id} justifyContent="space-between" display="flex" maxWidth="648px">
        <Box>
          <CheckboxComponent
            value={id}
            checked={enabled}
            className={classes.checkbox}
            label={
              <div className={classes.label}>
                <Skill id={gw2id} disableLink className={classes.skill} />
                {subText && (
                  <Typography className={classes.subText}>
                    {
                      // i18next-extract-mark-context-next-line {{skillSubText}}
                      t('skillSubText', { context: subText })
                    }
                  </Typography>
                )}
              </div>
            }
            onChange={handleCheckboxChange(id)}
          />
        </Box>
        {amountData ? (
          <Box>
            <AmountInput
              placeholder={amountData.default}
              // i18next-extract-mark-context-next-line {{amountLabel}}
              label={t('amountLabel', { context: amountData.label })}
              handleAmountChange={handleAmountChange(id)}
              value={amount}
              disabled={!enabled}
            />
          </Box>
        ) : null}
      </Box>
    );
  });
};

export default withStyles(styles)(Skills);
