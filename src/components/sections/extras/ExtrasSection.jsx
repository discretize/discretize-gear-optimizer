import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../baseComponents/Section';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import { changeExtras } from '../../../state/slices/extras';

import Extras from './Extras';

const ExtrasSection = ({ profession, data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  let extrasPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    extrasPresets = data.presetExtras.list.filter((preset) => {
      return (
        preset.profession === null ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickExtras = React.useCallback(
    (value) => {
      if (value === null) return;

      const newExtras = JSON.parse(value.value);
      dispatch(changeExtras(newExtras));
    },
    [dispatch],
  );

  return (
    <Section
      title={t('Runes & Sigils & Food')}
      content={<Extras />}
      extraInfo={
        <>
          {profession !== '' && (
            <Presets
              data={extrasPresets}
              handleClick={onTemplateClickExtras}
              presetCategory="extra"
            />
          )}
        </>
      }
    />
  );
};

export default React.memo(ExtrasSection);
