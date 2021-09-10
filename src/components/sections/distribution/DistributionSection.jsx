/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Switch } from '@material-ui/core';
import Section from '../../baseComponents/Section';
import DamageDistribution from './DamageDistribution';
import {
  changeAllDistributionsNew,
  changeAllDistributionsOld,
  changeAllTextBoxes,
  changeDistributionVersion,
  getDistributionVersion,
} from '../../../state/gearOptimizerSlice';
import { PROFESSIONS } from '../../../utils/gw2-data';
import Presets from '../../baseComponents/Presets';

const DistributionSection = ({ profession, data }) => {
  const dispatch = useDispatch();
  const distributionVersion = useSelector(getDistributionVersion);

  const distributionPresets =
    profession !== ''
      ? data.presetDistribution.list.filter(
          (preset) =>
            PROFESSIONS.find((p) => p.profession === profession).eliteSpecializations.includes(
              preset.profession,
            ) || preset.profession === null,
        )
      : null;

  const onTemplateClickDistribution = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(distributionPresets[index].value);

      dispatch(changeAllDistributionsOld(state.values1));
      dispatch(changeAllDistributionsNew(state.values2));
      dispatch(changeAllTextBoxes(state.values2));
    },
    [dispatch, distributionPresets],
  );

  return (
    <Section
      title="Skill Coefficients"
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
            label="Switch to %-wise damage distribution"
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
              This data represents your rotation. If we don't supply a template for a build, you can
              move these sliders until the results match a golem log, or calculate them manually.
            </p>
            <p>
              To do so, calculate and sum the [power coefficient * weapon strength] and [condition
              stacks * duration] of each skill you use, then divide by total time.
            </p>
            <p>For more information, ask in Discord!</p>
          </>
        ) : (
          <>
            <p>
              This data represents your rotation. If we don't supply a template for a build, you can
              move these sliders until the results match a golem log, or calculate them manually.
            </p>
            <p>
              To do so, perform your rotation on a golem with no gear, traits, or other modifiers,
              then enter the distribution here.
            </p>
          </>
        )
      }
    />
  );
};

export default DistributionSection;
