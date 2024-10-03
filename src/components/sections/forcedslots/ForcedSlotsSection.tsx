import { Chip } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useStore } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import { changeAllForcedSlots, clearForcedSlots } from '../../../state/slices/forcedSlots';
import type { RootState } from '../../../state/store';
import Section from '../../baseComponents/Section';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection = () => {
  const { t } = useTranslation();
  const store = useStore();
  const dispatch = useDispatch();

  const handleCopy = () => {
    const selectedCharacter = getSelectedCharacter(store.getState() as RootState);
    const currentSelectedSlots = selectedCharacter?.gear;
    if (currentSelectedSlots) {
      dispatch(changeAllForcedSlots(currentSelectedSlots));
    }
  };

  const handleClear = () => {
    dispatch(clearForcedSlots());
  };

  const chipStyle = {
    margin: 4,
  };

  return (
    <Section
      title={t('Forced Slots')}
      content={<ForcedSlots />}
      helpText={
        <Trans>
          Lock any gear slots to a specific type to work with what you already have or share gear
          between multiple builds.
        </Trans>
      }
      extraInfo={
        <>
          <Chip style={chipStyle} variant="outlined" onClick={handleClear} label={t('Clear')} />
          <Chip
            style={chipStyle}
            variant="outlined"
            onClick={handleCopy}
            label={t('Copy from selected character')}
          />
        </>
      }
    />
  );
};
export default React.memo(ForcedSlotsSection);
