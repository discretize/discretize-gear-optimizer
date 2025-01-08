import type { PresetBuffsEntry } from 'data/presetdata';
import { presetBuffs } from 'data/presetdata';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { replaceBuffs } from '../../../state/slices/buffs';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Buffs from './Buffs';

const BuffsSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTemplateClickBuffs = React.useCallback(
    (value: PresetBuffsEntry) => dispatch(replaceBuffs(value.value)),
    [dispatch],
  );

  return (
    <Section
      title={t('Buffs & Boons')}
      extraInfo={
        <Presets
          data={presetBuffs.list}
          handleClick={handleTemplateClickBuffs}
          presetCategory="buff"
        />
      }
      content={<Buffs />}
    />
  );
};
export default React.memo(BuffsSection);
