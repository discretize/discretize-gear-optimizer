import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { PresetInfusionsEntry } from '../../../assets/presetdata/metadata';
import { changeInfusions } from '../../../state/slices/infusions';
import { getGameMode } from '../../../state/slices/userSettings';
import data from '../../../utils/data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Infusions from './Infusions';

const InfusionsSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const gamemode = useSelector(getGameMode);

  const isFractals = gamemode === 'fractals';

  const infusionPresets = data.presetInfusions.list;

  const onTemplateClickInfusions = React.useCallback(
    (value: PresetInfusionsEntry) => {
      if (!value) return;

      const newInfusions = JSON.parse(value.value);
      dispatch(changeInfusions(newInfusions));
    },
    [dispatch],
  );

  const title = t('Infusions') + (isFractals ? ` ${t('+ AR')}` : '');

  return (
    <Section
      title={title}
      content={<Infusions />}
      helpText={
        <Trans>
          Select up to 2 types of stat infusions, and optionally limit the quantity allowed.
        </Trans>
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
