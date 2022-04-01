/* eslint-disable react/no-unescaped-entities */
import { Box, FormControlLabel, Link, Switch } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeAllDistributions,
  changeDistributionVersion,
  getDistributionVersion,
} from '../../../state/slices/distribution';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import DamageDistribution from './DamageDistribution';

const useStyles = makeStyles()((theme) => ({
  smallLabel: {
    fontSize: '0.8rem',
  },
}));

const DistributionSection = ({ profession, data }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const distributionVersion = useSelector(getDistributionVersion);
  const { t } = useTranslation();

  let distributionPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    distributionPresets = data.presetDistribution.list.filter((preset) => {
      if (preset.name === 'None') return false;
      return (
        !preset.profession ||
        preset.profession === profession ||
        eliteSpecializations.includes(preset.profession)
      );
    });
  }

  const onTemplateClickDistribution = React.useCallback(
    (value) => {
      if (!value) return;

      dispatch(changeAllDistributions(JSON.parse(value.value)));
    },
    [dispatch],
  );

  return (
    <Section
      title={t('Skill Coefficients')}
      content={<DamageDistribution />}
      extraInfo={
        <>
          <FormControlLabel
            control={
              <Switch
                checked={distributionVersion === 1}
                onChange={(e) => dispatch(changeDistributionVersion(e.target.checked ? 1 : 2))}
                name="checked"
                color="primary"
              />
            }
            label={t('Switch to %-wise damage distribution')}
            classes={{ label: classes.smallLabel }}
          />

          {profession !== '' && (
            <Presets
              data={distributionPresets}
              handleClick={onTemplateClickDistribution}
              presetCategory="distribution"
            />
          )}
        </>
      }
      helpText={
        distributionVersion === 2 ? (
          <>
            <Trans>
              This data represents your rotation. If we don't supply a template for a build, you can
              calculate the correct coefficients so that a tested build matches a golem log using
              the tool under "development" below, or calculate them manually.
            </Trans>
            <Box component="span" sx={{ mt: 1, display: 'block' }} />

            <Trans>
              For more information,{' '}
              <Link
                href="https://github.com/discretize/discretize-gear-optimizer/tree/staging/docs/Coefficients.md"
                target="_blank"
                rel="noopener"
              >
                see the coefficients documentation on Github
              </Link>{' '}
              or ask in Discord!
            </Trans>
          </>
        ) : (
          <>
            <Trans>
              This data represents your rotation. If we don't supply a template for a build, you can
              move these sliders until the results match a golem log, or calculate them manually.
            </Trans>
            <Box component="span" sx={{ mt: 1, display: 'block' }} />

            <Trans>
              To do so, perform your rotation on a golem with no gear, traits, or other modifiers,
              then enter the distribution here.
            </Trans>
          </>
        )
      }
    />
  );
};

export default DistributionSection;
