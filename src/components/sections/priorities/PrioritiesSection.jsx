import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePriority } from '../../../state/slices/priorities';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import Priorities from './Priorities';

const PrioritiesSection = ({ data }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTemplateClickPriorities = React.useCallback(
    (value) => {
      if (value === null) return;
      const state = JSON.parse(value.value);
      Object.keys(state).forEach((key) => dispatch(changePriority({ key, value: state[key] })));
    },
    [dispatch],
  );

  return (
    <Section
      title={t('Priorities')}
      content={<Priorities />}
      extraInfo={
        <Presets
          data={data.presetAffixes.list}
          handleClick={handleTemplateClickPriorities}
          presetCategory="affix"
        />
      }
    />
  );
};
export default React.memo(PrioritiesSection);
