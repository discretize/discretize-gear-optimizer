import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { Box } from '@mui/material';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allExtrasModifiersById, extrasModifiers } from '../../../assets/modifierdata';
import {
  changeLifestealAmount,
  getExtrasIds,
  getLifestealAmount,
  lifestealData,
} from '../../../state/slices/extras';
import AmountInput from '../../baseComponents/AmountInput';
import ExtraSelection from './ExtraSelection';

const Extras = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const foodIds = useSelector(getExtrasIds).Nourishment || [];
  const hasLifestealFood = foodIds.some((id) => allExtrasModifiersById[id]?.hasLifesteal);
  const lifestealAmount = useSelector(getLifestealAmount);

  return (
    <>
      <ExtraSelection
        type="Sigil1"
        text={t('Sigil 1')}
        label={<Item id={24615} disableLink disableTooltip text={t('Sigil 1')} />}
        modifierData={extrasModifiers.sigils}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Sigil2"
        text={t('Sigil 2')}
        label={<Item id={24868} disableLink disableTooltip text={t('Sigil 2')} />}
        modifierData={extrasModifiers.sigils}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Runes"
        text={t('Runes')}
        label={<Item id={24836} disableLink disableTooltip text={t('Runes')} />}
        modifierData={extrasModifiers.runes}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Nourishment"
        text={t('Nourishment')}
        label={<ConsumableEffect disableLink name="Nourishment" text={t('Nourishment')} />}
        modifierData={extrasModifiers.food}
        modifierDataById={allExtrasModifiersById}
      />
      {hasLifestealFood ? (
        <Box sx={{ mb: 2 }}>
          lifesteal frequency:{' '}
          <AmountInput
            placeholder={lifestealData.amountData.default}
            endLabel={lifestealData.amountData.label}
            handleAmountChange={(event) => dispatch(changeLifestealAmount(event.target.value))}
            value={lifestealAmount}
            maxWidth={38}
          />
        </Box>
      ) : null}
      <ExtraSelection
        type="Enhancement"
        text={t('Enhancement')}
        label={<ConsumableEffect disableLink name="Enhancement" text={t('Enhancement')} />}
        modifierData={extrasModifiers.utility}
        modifierDataById={allExtrasModifiersById}
      />
    </>
  );
};

export default React.memo(Extras);
