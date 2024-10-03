import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { replaceBuffs } from '../../../state/slices/buffs';
import data from '../../../utils/data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Buffs from './Buffs';
import type { PresetBuffsEntry } from '../../../assets/presetdata/metadata';

const BuffsSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTemplateClickBuffs = React.useCallback(
    (value: PresetBuffsEntry) => {
      if (!value) return;

      const state = JSON.parse(value.value);
      dispatch(replaceBuffs(state as Record<string, boolean>));
    },
    [dispatch],
  );

  return (
    <Section
      title={t('Buffs & Boons')}
      extraInfo={
        <Presets
          data={data.presetBuffs.list}
          handleClick={handleTemplateClickBuffs}
          presetCategory="buff"
        />
      }
      content={<Buffs />}
    />
  );
};
export default React.memo(BuffsSection);
