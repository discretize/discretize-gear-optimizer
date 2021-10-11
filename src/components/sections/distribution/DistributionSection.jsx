/* eslint-disable react/no-unescaped-entities */
import { FormControlLabel, Switch } from '@material-ui/core';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAllDistributionsNew,
  changeAllDistributionsOld,
  changeAllTextBoxes,
  changeDistributionVersion,
  getDistributionVersion,
  resetDistributions,
} from '../../../state/slices/distribution';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';
import Section from '../../baseComponents/Section';
import DamageDistribution from './DamageDistribution';

const DistributionSection = ({ profession, data }) => {
  const dispatch = useDispatch();
  const distributionVersion = useSelector(getDistributionVersion);
  const { t } = useTranslation();

  let distributionPresets;
  if (profession) {
    const { eliteSpecializations } = PROFESSIONS.find((entry) => entry.profession === profession);
    distributionPresets = data.presetDistribution.list.filter((preset) => {
      if (preset.name === 'None') return false;
      return preset.profession === null || eliteSpecializations.includes(preset.profession);
    });
  }

  const onTemplateClickDistribution = React.useCallback(
    (index) => (event) => {
      if (index < 0) {
        dispatch(resetDistributions());
        return;
      }

      const state = JSON.parse(distributionPresets[index].value);

      dispatch(changeAllDistributionsOld(state.values1));
      dispatch(changeAllDistributionsNew(state.values2));
      dispatch(changeAllTextBoxes(state.values2));
    },
    [dispatch, distributionPresets],
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
          />

          {profession !== '' && (
            <Presets data={distributionPresets} handleClick={onTemplateClickDistribution} />
          )}
        </>
      }
      helpText={
        distributionVersion === 2 ? (
          <>
            <p>
              <Trans>
                This data represents your rotation. If we don't supply a template for a build, you
                can move these sliders until the results match a golem log, or calculate them
                manually.
              </Trans>
            </p>
            <p>
              <Trans>
                To do so, calculate and sum the [power coefficient * weapon strength] and [condition
                stacks * duration] of each skill you use, then divide by total time.
              </Trans>
            </p>
            <p>
              <Trans>For more information, ask in Discord!</Trans>
            </p>
          </>
        ) : (
          <>
            <p>
              <Trans>
                This data represents your rotation. If we don't supply a template for a build, you
                can move these sliders until the results match a golem log, or calculate them
                manually.
              </Trans>
            </p>
            <p>
              <Trans>
                To do so, perform your rotation on a golem with no gear, traits, or other modifiers,
                then enter the distribution here.
              </Trans>
            </p>
          </>
        )
      }
    />
  );
};

export default DistributionSection;
