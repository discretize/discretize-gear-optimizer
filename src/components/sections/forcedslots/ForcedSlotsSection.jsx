import { Button } from '@material-ui/core';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import { changeAllForcedSlots, clearForcedSlots } from '../../../state/slices/forcedSlots';
import Section from '../../baseComponents/Section';
import ForcedSlots from './ForcedSlots';

const ForcedSlotsSection = () => {
  const { t } = useTranslation();
  const store = useStore();
  const dispatch = useDispatch();

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

  return (
    <Section
      title={t('Forced Slots')}
      content={<ForcedSlots />}
      helpText={
        <p>
          <Trans>
            Lock any gear slots to a specific type to work with what you already have or share gear
            between multiple builds.
          </Trans>
        </p>
      }
      extraInfo={
        <>
          <Button onClick={handleClear}>Clear</Button>
          <Button onClick={handleCopy}>Copy from selected character</Button>
        </>
      }
    />
  );
};
export default React.memo(ForcedSlotsSection);
