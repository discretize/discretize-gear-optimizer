import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfession } from '../state/slices/controlsSlice';
import { getExpertMode } from '../state/slices/userSettings';
import NavBar from './nav/NavBar';
import AffixesSection from './sections/affixes/AffixesSection';
import BossSection from './sections/boss/BossSection';
import BuffsSection from './sections/buffs/BuffsSection';
import Controls from './sections/controls/Controls';
import DistributionSection from './sections/distribution/DistributionSection';
import ExtraModifiersSection from './sections/extramodifiers/ExtraModifiersSection';
import ExtrasSection from './sections/extras/ExtrasSection';
import ForcedSlotsSection from './sections/forcedslots/ForcedSlotsSection';
import InfusionsSection from './sections/infusions/InfusionsSection';
import PrioritiesSection from './sections/priorities/PrioritiesSection';
import ResultDetails from './sections/results/ResultDetails';
import ResultTable from './sections/results/table/ResultTable';
import SharingSection from './sections/sharing/SharingSection';
import SkillsSection from './sections/skills/SkillsSection';
import TraitsSection from './sections/traits/TraitsSection';

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 */
const GearOptimizer = () => {
  // Query variables from redux store that should have a global scope
  const expertMode = useSelector(getExpertMode);
  const profession = useSelector(getProfession);

  const { t } = useTranslation();

  const classOrBuildText = t('Select a class or a build template from the menu above!');
  const classText = t('Select a build template from the menu above!');

  return (
    <>
      <NavBar />
      <Box>
        {profession === '' && (
          <Typography mb={1}>
            <ExpandLessIcon />
            <i>{expertMode ? classOrBuildText : classText}</i> <ExpandLessIcon />
          </Typography>
        )}

        <div style={profession === '' ? { opacity: 0.5 } : { opacity: 1.0 }}>
          <Grid container>
            {expertMode ? (
              <>
                <TraitsSection />

                <SkillsSection />

                <ExtrasSection />

                <BuffsSection />

                <ExtraModifiersSection />

                <InfusionsSection />

                <AffixesSection />

                <ForcedSlotsSection />

                <PrioritiesSection />

                <DistributionSection />

                <BossSection />
              </>
            ) : (
              <>
                <SkillsSection />

                <ExtrasSection />

                <BuffsSection first />

                <InfusionsSection />

                <AffixesSection />

                <ForcedSlotsSection />

                <PrioritiesSection />
              </>
            )}
          </Grid>

          <div id="canvaselelement" />
          <Typography variant="caption">x = healing (max 1300), y = damage (max 30000)</Typography>

          <Controls />

          <ResultTable />
          <Box m={3} />
          <ResultDetails />
          <Box m={3} />

          <SharingSection />
        </div>
      </Box>
    </>
  );
};

export default GearOptimizer;
