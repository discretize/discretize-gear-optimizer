/* eslint-disable react/no-unescaped-entities */
import { Box, Link } from '@mui/material';
import type { PresetDistributionEntry } from 'data/presetdata';
import { presetDistribution } from 'data/presetdata';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProfession } from '../../../state/slices/controlsSlice';
import { changeAllDistributions } from '../../../state/slices/distribution';
import { SPECIALIZATIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import DamageDistribution from './DamageDistribution';

const DistributionSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const profession = useSelector(getProfession);

  let distributionPresets;
  if (profession) {
    const eliteSpecializations = SPECIALIZATIONS[profession];
    distributionPresets = presetDistribution.list.filter((preset) => {
      if (preset.name === 'None') return false;
      return (
        !preset.profession ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickDistribution = React.useCallback(
    (value: PresetDistributionEntry) => dispatch(changeAllDistributions(value)),
    [dispatch],
  );

  return (
    <Section
      title={t('Skill Coefficients')}
      content={<DamageDistribution />}
      extraInfo={
        profession !== '' && (
          <Presets
            data={distributionPresets}
            handleClick={onTemplateClickDistribution}
            presetCategory="distribution"
          />
        )
      }
      helpText={
        <>
          <Trans>
            This data represents your rotation. If we don't supply a template for a build, you can
            calculate the correct coefficients so that a tested build matches a golem log using the
            tool under "development" below, or calculate them manually.
          </Trans>
          <Box component="span" sx={{ mt: 1, display: 'block' }} />

          <Trans>
            For more information,{' '}
            <Link
              href="https://github.com/discretize/discretize-gear-optimizer/tree/main/docs/Coefficients.md"
              target="_blank"
              rel="noopener"
            >
              see the coefficients documentation on Github
            </Link>{' '}
            or ask in Discord!
          </Trans>
        </>
      }
    />
  );
};

export default DistributionSection;
