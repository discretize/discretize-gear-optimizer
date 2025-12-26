import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { PresetInfusionsEntry } from '../../../assets/presetdata/metadata';
import { changeInfusionOptions, changeMaxInfusions } from '../../../state/slices/infusions';
import { getGameMode } from '../../../state/slices/userSettings';
import data from '../../../utils/data';
import Presets, { BasicPresets } from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Infusions from './Infusions';

const infusionCountPresets = [
  { name: '0x', value: '0' },
  { name: '18x', value: '18' },
];

const InfusionsSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const gamemode = useSelector(getGameMode);

  const isFractals = gamemode === 'fractals';

  const infusionPresets = data.presetInfusions.list;

  const onTemplateClickInfusions = React.useCallback(
    (value: PresetInfusionsEntry) => dispatch(changeInfusionOptions(value.value)),
    [dispatch],
  );

  const onTemplateClickInfusionsCount = React.useCallback(
    (value: string) => dispatch(changeMaxInfusions(value)),
    [dispatch],
  );

  const title = t('Infusions') + (isFractals ? ` ${t('+ AR')}` : '');

  return (
    <Section
      title={title}
      content={<Infusions />}
      helpText={
        <Trans>Select types of stat infusions, and optionally limit the quantity allowed.</Trans>
      }
      extraInfo={
        <>
          <BasicPresets data={infusionCountPresets} handleClick={onTemplateClickInfusionsCount} />
          <Presets
            data={infusionPresets}
            handleClick={onTemplateClickInfusions}
            presetCategory="infusion"
          />
        </>
      }
    />
  );
};
export default React.memo(InfusionsSection);
