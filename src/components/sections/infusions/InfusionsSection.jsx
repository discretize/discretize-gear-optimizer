import { Trans, useTranslation } from 'react-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeInfusions } from '../../../state/slices/infusions';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Infusions from './Infusions';

const InfusionsSection = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const infusionPresets = data.presetInfusions.list;

  const onTemplateClickInfusions = React.useCallback(
    (value) => {
      if (value === null) return;

      const newInfusions = JSON.parse(value.value);
      dispatch(changeInfusions(newInfusions));
    },
    [dispatch],
  );

  return (
    <Section
      title={t('Infusions + AR')}
      content={<Infusions />}
      helpText={
        <>
          <Trans>
            Select up to 2 types of stat infusions, and optionally limit the quantity allowed.
          </Trans>
        </>
      }
      extraInfo={
        <Presets
          data={infusionPresets}
          handleClick={onTemplateClickInfusions}
          presetCategory="infusion"
        />
      }
    />
  );
};
export default React.memo(InfusionsSection);
