import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { allExtrasModifiersById, extrasModifiers } from '../../../assets/modifierdata';
import {
  changeLifestealAmount,
  getExtrasIds,
  getLifestealAmount,
  lifestealData,
} from '../../../state/slices/extras';
import { AmountInput } from '../../baseComponents/AmountInput';
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
      />
      <ExtraSelection
        type="Sigil2"
        text={t('Sigil 2')}
        label={<Item id={24868} disableLink disableTooltip text={t('Sigil 2')} />}
        modifierData={extrasModifiers.sigils}
      />
      <ExtraSelection
        type="Runes"
        text={t('Runes')}
        label={<Item id={24836} disableLink disableTooltip text={t('Runes')} />}
        modifierData={extrasModifiers.runes}
      />
      <ExtraSelection
        type="Relics"
        text={t('Relics')}
        label={<Item id={100916} disableLink disableTooltip text={t('Relics')} />}
        modifierData={extrasModifiers.relics}
      />
      <ExtraSelection
        type="Nourishment"
        text={t('Nourishment')}
        label={<ConsumableEffect disableLink name="Nourishment" text={t('Nourishment')} />}
        modifierData={extrasModifiers.food}
      />
      {hasLifestealFood ? (
        <Box
          sx={{ mt: -1, mb: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <Typography variant="caption" sx={{ mr: 1, mt: 1 }}>
            <Trans>Lifesteal frequency:</Trans>
          </Typography>
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
      />
    </>
  );
};

export default React.memo(Extras);
