import { Chip, FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeExclusion,
  changeExclusionsEnabled,
  changePriority,
  getExclusionsEnabled,
  getPriority,
} from '../../../state/slices/priorities';
import Section from '../../baseComponents/Section';
import Affixes from './Affixes';

const AffixesSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const affixes = useSelector(getPriority('affixes'));
  const exclusionsEnabled = useSelector(getExclusionsEnabled);

  const handleRitualist = () => {
    dispatch(changeExclusionsEnabled(true));
    [6, 7, 8, 9, 10, 11].forEach((index) =>
      dispatch(changeExclusion({ affix: 'Ritualist', index, value: true })),
    );

    dispatch(
      changePriority({
        key: 'affixes',
        value: affixes.includes('Celestial') ? affixes : [...affixes, 'Celestial'],
      }),
    );
  };

  const chipStyle = {
    margin: 4,
  };

  return (
    <Section
      title={t('Affixes / Stat options')}
      helpText={
        <>
          <Trans>
            Select the affixes you want to optimize for here. Keep in mind that selecting more than
            3 Affixes might become computational infeasible.
          </Trans>
        </>
      }
      content={<Affixes />}
      extraInfo={
        <>
          <FormControlLabel
            control={
              <Switch
                checked={exclusionsEnabled}
                onChange={(e) => dispatch(changeExclusionsEnabled(e.target.checked))}
                name="checked"
                color="primary"
              />
            }
            label={t('Show affix exclusion controls')}
          />
          {affixes.includes('Ritualist') ? (
            <Chip
              style={chipStyle}
              variant="outlined"
              onClick={handleRitualist}
              label={t('Auto-disable ritualist trinkets')}
            />
          ) : null}
        </>
      }
    />
  );
};
export default React.memo(AffixesSection);
