import { Chip, FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import {
  changeAllForcedSlots,
  changeExclusion,
  changeExclusionsEnabled,
  clearForcedSlots,
  getExclusionsEnabled,
} from '../../../state/slices/forcedSlots';
import { changePriority, getPriority } from '../../../state/slices/priorities';
import Section from '../../baseComponents/Section';
import ExcludedSlots from './ExcludedSlots';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection = () => {
  const { t } = useTranslation();
  const store = useStore();
  const dispatch = useDispatch();

  const exclusionsEnabled = useSelector(getExclusionsEnabled);
  const affixes = useSelector(getPriority('affixes'));

  const handleCopy = () => {
    const selectedCharacter = getSelectedCharacter(store.getState());
    const currentSelectedSlots = selectedCharacter?.gear;
    if (currentSelectedSlots) {
      dispatch(changeAllForcedSlots(currentSelectedSlots));
    }
  };

  const handleClear = () => {
    dispatch(clearForcedSlots());
  };

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
      title={t('Forced Slots')}
      content={
        <>
          <ForcedSlots />
          {exclusionsEnabled && <ExcludedSlots />}
        </>
      }
      helpText={
        <Trans>
          Lock any gear slots to a specific type to work with what you already have or share gear
          between multiple builds.
        </Trans>
      }
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
          <Chip style={chipStyle} variant="outlined" onClick={handleClear} label={t('Clear')} />
          <Chip
            style={chipStyle}
            variant="outlined"
            onClick={handleCopy}
            label={t('Copy from selected character')}
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
export default React.memo(ForcedSlotsSection);
