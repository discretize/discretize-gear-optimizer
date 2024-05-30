import { Skill } from '@discretize/gw2-ui-new';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills, setSkillAmount, toggleSkill } from '../../../state/slices/skills';
import AmountInput from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

const Skills = ({ data }) => {
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
            label={
              <Box display="flex">
                {gw2id && <Skill id={gw2id} disableLink />}
                {subText && (
                  <Typography sx={{ fontWeight: 200, marginLeft: 1 }}>
                    {
                      // i18next-extract-mark-context-next-line {{skillSubText}}
                      t('skillSubText', { context: subText })
                    }
                  </Typography>
                )}
              </Box>
            }
            onChange={handleCheckboxChange(id)}
          />
        </Box>
        {amountData ? (
          <Box>
            <AmountInput
              placeholder={amountData.default}
              // i18next-extract-mark-context-next-line {{amountLabel}}
              endLabel={t('amountLabel', { context: amountData.label })}
              handleAmountChange={handleAmountChange(id)}
              value={amount}
              disabled={!enabled}
              maxWidth={amountData?.label === 'dps' ? 58 : 38}
            />
          </Box>
        ) : null}
      </Box>
    );
  });
};

export default Skills;
