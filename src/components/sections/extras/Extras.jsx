import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { allExtrasModifiersById, extrasModifiers } from '../../../assets/modifierdata';
import ExtraSelection from './ExtraSelection';

const Extras = () => {
  const { t } = useTranslation();
  return (
    <>
      <ExtraSelection
        type="Sigil1"
        label={<Item id={24615} disableLink disableTooltip text={t('Sigil 1')} />}
        modifierData={extrasModifiers.sigils}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Sigil2"
        label={<Item id={24868} disableLink disableTooltip text={t('Sigil 2')} />}
        modifierData={extrasModifiers.sigils}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Runes"
        label={<Item id={24836} disableLink disableTooltip text={t('Runes')} />}
        modifierData={extrasModifiers.runes}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Nourishment"
        label={<ConsumableEffect disableLink name="Nourishment" text={t('Nourishment')} />}
        modifierData={extrasModifiers.food}
        modifierDataById={allExtrasModifiersById}
      />
      <ExtraSelection
        type="Enhancement"
        label={<ConsumableEffect disableLink name="Enhancement" text={t('Enhancement')} />}
        modifierData={extrasModifiers.utility}
        modifierDataById={allExtrasModifiersById}
      />
    </>
  );
};

export default React.memo(Extras);
