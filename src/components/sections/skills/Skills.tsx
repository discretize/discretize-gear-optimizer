import { Skill } from '@discretize/gw2-ui-new';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classModifiers } from '../../../assets/modifierdata';
import type { ModifierItem } from '../../../assets/modifierdata/metadata';
import { getProfession } from '../../../state/slices/controlsSlice';
import { getSkills, setSkillAmount, toggleSkill } from '../../../state/slices/skills';
import AdvancedUptimeIndicator from '../../baseComponents/AdvancedUptimeIndicator';
import { AmountInput } from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import Info from '../../baseComponents/Info';

const Skills = ({ data }: { data: ModifierItem[] }) => {
  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const skillState = useSelector(getSkills);

  const { t } = useTranslation();

  if (!data || data.length < 1) {
    return t('This class does not appear to have skills with extra buffs');
  }

  const skillsSection = data.map((skill) => {
    const { id, gw2id, subText, amountData } = skill;
    const enabled = Boolean(skillState[id]);
    const amount = skillState[id]?.amount || '';
    return (
      <Box key={id} sx={{ justifyContent: 'space-between', display: 'flex', maxWidth: '648px' }}>
        <Box>
          <CheckboxComponent
            value={id}
            checked={enabled}
            label={
              <Box sx={{ display: 'flex' }}>
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
            onChange={(e) => {
              dispatch(toggleSkill({ id, enabled: e.target.checked }));
            }}
          />
        </Box>
        {amountData ? (
          <Box>
            <AdvancedUptimeIndicator amount={amount} amountData={amountData} />
            <AmountInput
              placeholder={amountData.default}
              // i18next-extract-mark-context-next-line {{amountLabel}}
              endLabel={t('amountLabel', { context: amountData.label })}
              handleAmountChange={(e) => {
                dispatch(setSkillAmount({ id, amount: e.target.value }));
              }}
              value={amount}
              disabled={!enabled}
              maxWidth={amountData?.label === 'dps' ? 58 : 38}
            />
          </Box>
        ) : null}
      </Box>
    );
  });

  const skillsNote =
    profession && classModifiers[profession]?.find((section) => section.section === 'Skills')?.note;

  return (
    <>
      {skillsSection}
      {skillsNote ? (
        <Box sx={{ maxWidth: '648px', p: 1, whiteSpace: 'pre-line' }}>
          <Info icon={<WarningAmberIcon />}>
            {
              // i18next-extract-mark-context-next-line {{traitNote}}
              t('traitNote', { context: skillsNote })
            }
          </Info>
        </Box>
      ) : null}
    </>
  );
};

export default Skills;
