import { APILanguageProvider } from '@discretize/gw2-ui-new';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Alert, Chip, Collapse, IconButton, Link, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GearOptimizer from '../../components/GearOptimizer';
import BackgroundImage from '../../components/baseComponents/BackgroundImage';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import Layout from '../../components/baseComponents/Layout';
import URLStateImport from '../../components/url-state/URLStateImport';
import { isFirefox } from '../../state/optimizer/detectFirefox';
import SagaTypes from '../../state/sagas/sagaTypes';
import { getMulticore } from '../../state/slices/controlsSlice';
import { getGameMode } from '../../state/slices/userSettings';

// markup
const IndexPage = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const gameMode = useSelector(getGameMode);
  const multicore = useSelector(getMulticore);

  const [alertOpen, setAlertOpen] = React.useState([true, true, true]);

  const ALERTS = [
    <Trans>
      🎉 Janthir Wilds has been released! 🎉
      <br />
      <br />
      Core game changes are updated for the October 8th game patch.
    </Trans>,
    <Trans>
      The gear optimizer is still being developed! Please report issues or suggest improvements in
      the Discretize{' '}
      <Link
        href="https://discord.gg/Qdt7nFY"
        target="_blank"
        rel="noopener"
        sx={{ color: 'textPrimary' }}
      >
        Discord
      </Link>{' '}
      or on{' '}
      <Link
        href="https://github.com/discretize/discretize-gear-optimizer"
        target="_blank"
        rel="noopener"
        sx={{ color: 'textPrimary' }}
      >
        <GitHubIcon fontSize="small" /> Github
      </Link>
      .
    </Trans>,
    ...(isFirefox
      ? [
          <Trans>
            Note: Some large calculations may take longer in Firefox for reasons that are currently
            unclear.
          </Trans>,
        ]
      : []),
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
              sx={{ marginBottom: 1, color: '#fff' }}
            >
              {alert}
            </MuiAlert>
          </Collapse>
        ))}
        <Typography variant="h2" sx={{ paddingBottom: 2 }}>
          <Trans>Gear Optimizer</Trans>
          {multicore && (
            <>
              {' '}
              <Chip label="BETA" color="error" sx={{ alignSelf: 'flex-end' }} />
            </>
          )}
        </Typography>

        {multicore && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
              You have selected the experimental Rust/WebAssembly mode. This mode is still in
              development and may cause issues. Please report any issues in the Discretize{' '}
              <Link href="https://discord.gg/Qdt7nFY" target="_blank" rel="noopener">
                Discord
              </Link>
              . More in-depth explanation and technical background information can be found{' '}
              <Link href="https://sopuli.xyz/post/713722" target="_blank" rel="noopener">
                here
              </Link>
              .
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
              A number of features are incomplete / broken in this mode. Other than those enumerated
              here, the optimizer should work as expected.
            </Typography>

            <Typography variant="body2" component="ul" sx={{ '& > li': { mb: 1 } }}>
              <li>
                <b>Resuming a paused calculation.</b>
              </li>
              <li>
                <b>Infusions.</b> They are not yet supported and are ignored in the calculation.
              </li>
              <li>
                <b>Displaying the best result for each combination.</b> This is not possible due to
                the Rust implementation not calculating every combination.
              </li>
              <li>
                <b>Coefficient Calculation from Logs.</b>
              </li>
            </Typography>
          </Alert>
        )}

        <ErrorBoundary location="GearOptimizer">
          <GearOptimizer />{' '}
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};

export default IndexPage;
