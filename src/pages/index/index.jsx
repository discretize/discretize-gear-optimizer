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
    <>
      Bonjour! ¡Hola! 你好! <br />
      We are looking for translators for Spanish, French and Chinese. Contact us!
    </>,
    <>
      <Trans>
        The gear optimizer is currently in beta! Templates are not final and illusion/summon/mech
        and lifesteal and condition-on-crit damage is inaccurate. Please report potential issues to
        us in
      </Trans>{' '}
      <Link href="https://discord.gg/Qdt7nFY" color="textPrimary" target="_blank" rel="noopener">
        Discord
      </Link>{' '}
      <Trans>or</Trans>{' '}
      <Link
        href="https://github.com/discretize/discretize-gear-optimizer"
        color="textPrimary"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon fontSize="small" /> Github
      </Link>
      .
    </>,
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
          <Trans>Gear Optimizer test string goes here hello</Trans>
        </Typography>
        <ErrorBoundary location="GearOptimizer">
          <GearOptimizer />{' '}
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};

export default IndexPage;
