import { APILanguageProvider } from '@discretize/gw2-ui-new';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Collapse, IconButton, Link, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BackgroundImage from '../../components/baseComponents/BackgroundImage';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import Layout from '../../components/baseComponents/Layout';
import GearOptimizer from '../../components/GearOptimizer';
import URLStateImport from '../../components/url-state/URLStateImport';
import SagaTypes from '../../state/sagas/sagaTypes';
import { getGameMode } from '../../state/slices/userSettings';

// markup
const IndexPage = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const gameMode = useSelector(getGameMode);

  const [alertOpen, setAlertOpen] = React.useState([true, true]);

  const ALERTS = [
    <Trans>
      Core game changes are updated for the November 29th game patch, but preset coefficients and
      trait selections may not yet be completely updated. Most gear results will be correctly
      optimized, but DPS estimates and comparisons may be wrong.
      <br />
      <br />
      Templates not marked as Outdated are up to date.
    </Trans>,
    <Trans>
      The gear optimizer is still being developed! Please report issues or suggest improvements in
      the Discretize{' '}
      <Link href="https://discord.gg/Qdt7nFY" color="textPrimary" target="_blank" rel="noopener">
        Discord
      </Link>{' '}
      or on{' '}
      <Link
        href="https://github.com/discretize/discretize-gear-optimizer"
        color="textPrimary"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon fontSize="small" /> Github
      </Link>
      .
    </Trans>,
  ];

  return (
    <APILanguageProvider value={language}>
      <BackgroundImage gameMode={gameMode} />
      <Layout>
        <URLStateImport sagaType={SagaTypes.ImportFormState} clearUrlOnSuccess />
        {ALERTS.map((alert, index) => (
          <Collapse key={`alert-${index.toString()}`} in={alertOpen[index]}>
            <MuiAlert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    const newAlertOpen = [...alertOpen];
                    newAlertOpen[index] = false;
                    setAlertOpen(newAlertOpen);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              elevation={6}
              variant="filled"
              severity="info"
              color="subtleThemed"
              sx={{ marginBottom: 1 }}
            >
              {alert}
            </MuiAlert>
          </Collapse>
        ))}
        <Typography variant="h2" sx={{ paddingBottom: 2 }}>
          <Trans>Gear Optimizer</Trans>
        </Typography>
        <ErrorBoundary location="GearOptimizer">
          <GearOptimizer />{' '}
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};

export default IndexPage;
