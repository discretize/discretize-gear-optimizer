import { APILanguageProvider } from '@discretize/gw2-ui-new';
import { Layout } from '@discretize/react-discretize-components';
import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import BackgroundImage from '../../components/baseComponents/BackgroundImage';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import BuildPage from '../../components/BuildPage';
import NavSettings, { GAME_MODES } from '../../components/nav/NavSettings';
import { getGameMode } from '../../state/slices/userSettings';

const IndexPage = () => {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const gameMode = useSelector(getGameMode);

  return (
    <APILanguageProvider value={language}>
      <BackgroundImage gameMode={gameMode} />
      <Layout>
        <Box display="flex" gap={1} alignItems="center" pb={2}>
          <Typography variant="h3">
            <Trans>Shared Build</Trans>
          </Typography>
          <Box flexGrow={1}>
            <Chip label={GAME_MODES(t).find((mode) => mode.value === gameMode)?.label} />
          </Box>

          <Box>
            <NavSettings disableSettings={{ expertMode: true, gameMode: true }} />
          </Box>
        </Box>
        <ErrorBoundary location="BuildPage">
          <BuildPage />
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};

export default IndexPage;
