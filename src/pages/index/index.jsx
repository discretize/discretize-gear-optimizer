import { APILanguageProvider } from '@discretize/gw2-ui-new';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Alert, Chip, Collapse, IconButton, Link, List, ListItem, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import GearOptimizer from '../../components/GearOptimizer';
import BackgroundImage from '../../components/baseComponents/BackgroundImage';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import Layout from '../../components/baseComponents/Layout';
import URLStateImport from '../../components/url-state/URLStateImport';
import SagaTypes from '../../state/sagas/sagaTypes';
import { getMulticore } from '../../state/slices/controlsSlice';
import { getGameMode } from '../../state/slices/userSettings';

// markup
const IndexPage = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const gameMode = useSelector(getGameMode);
  const multicore = useSelector(getMulticore);

  const [alertOpen, setAlertOpen] = React.useState([true, true]);

  const ALERTS = [
    <Trans>
      🎉 Secrets of the Obscure has been released! 🎉
      <br />
      Core game changes are updated for the patch, but relics are a work in progress and most
      templates are outdated. Proceed with caution!
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
              sx={{ marginBottom: 1, color: '#fff' }}
            >
              {alert}
            </MuiAlert>
          </Collapse>
        ))}
        <Typography variant="h2" sx={{ paddingBottom: 2 }}>
          <Trans>Gear Optimizer jgvghvhv</Trans>
          {multicore && (
            <>
              {' '}
              <Chip label="BETA" color="error" sx={{ alignSelf: 'flex-end' }} />
            </>
          )}
        </Typography>

        {multicore && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            <Typography variant="body2" paragraph>
              You selected the experimental multicore mode. This mode is still in development and
              may cause issues. Please report any issues in the Discretize Discord. More in-depth
              explanation of the technical background can be found{' '}
              <Link href="https://sopuli.xyz/post/713722"> here </Link>
            </Typography>

            <Typography variant="body2" paragraph>
              Numerous features are incomplete / broken in this mode. Other than whats enumerated
              here, the optimizer should work as expected.
            </Typography>

            <List
              dense
              sx={{
                listStyleType: 'disc',
                pl: 4,
                '& .MuiListItem-root': {
                  display: 'list-item',
                },
              }}
            >
              <ListItem>
                Pausing / Resuming a calculation. Once started, the only way to prematurely
                terminated a calculation is to refresh the tab
              </ListItem>
              <ListItem>
                Infusions are not yet supported. They are ignored in the calculation
              </ListItem>
              <ListItem>
                Displaying the best result for each combination is not possible due to the Rust
                implementation not calculating every combination.
              </ListItem>
            </List>
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
