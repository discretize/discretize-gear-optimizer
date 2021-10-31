import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../baseComponents/Section';
import Presets from '../../baseComponents/Presets';
import Infusions from './Infusions';
import { changeInfusions } from '../../../state/slices/infusions';

const InfusionsSection = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const infusionPresets = data.presetInfusions.list;

  const onTemplateClickInfusions = React.useCallback(
    (index) => (event) => {
      if (index < 0) return;

      const newInfusions = JSON.parse(infusionPresets[index].value);
      dispatch(changeInfusions(newInfusions));
    },
    [dispatch, infusionPresets],
  );

  return (
    <Section
      title={t('Stat Infusions')}
      content={<Infusions />}
      helpText={
        <>
          <Trans>
            Select up to 2 types of stat infusions, and optionally limit the quantity allowed.
          </Trans>
        </>
      }
      extraInfo={<Presets data={infusionPresets} handleClick={onTemplateClickInfusions} />}
    />
  );
};
export default React.memo(InfusionsSection);
