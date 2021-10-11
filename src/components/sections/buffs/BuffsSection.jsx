import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { replaceBuffs } from '../../../state/slices/buffs';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Buffs from './Buffs';

const BuffsSection = ({ data }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTemplateClickBuffs = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetBuffs.list[index].value);
      dispatch(replaceBuffs(state));
    },
    [data.presetBuffs.list, dispatch],
  );

  return (
    <Section
      title={t('Buffs & Boons')}
      extraInfo={<Presets data={data.presetBuffs.list} handleClick={handleTemplateClickBuffs} />}
      content={<Buffs />}
    />
  );
};
export default React.memo(BuffsSection);
