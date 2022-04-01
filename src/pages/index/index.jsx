import { APILanguageProvider } from '@discretize/gw2-ui-new';
import { Layout } from '@discretize/react-discretize-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import LanguageSelection from '../../components/baseComponents/LanguageSelection';
import GearOptimizer from '../../components/GearOptimizer';
import URLStateImport from '../../components/url-state/URLStateImport';
import SagaTypes from '../../state/sagas/sagaTypes';

// markup
const IndexPage = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <APILanguageProvider value={language}>
      <Layout>
        <URLStateImport sagaType={SagaTypes.ImportFormState} clearUrlOnSuccess />
        <LanguageSelection />
        <MuiAlert elevation={6} variant="filled" severity="warning">
          <Trans>
            The gear optimizer is currently in beta! Templates are not final and
            illusion/summon/mech and lifesteal and condition-on-crit damage is inaccurate. Please
            report potential issues to us in
          </Trans>{' '}
          <Link
            href="https://discord.gg/Qdt7nFY"
            color="textPrimary"
            target="_blank"
            rel="noopener"
          >
            Discord
          </Link>{' '}
          <Trans>or</Trans>{' '}
          <Link
            href="https://github.com/discretize/discretize-gear-optimizer/tree/staging"
            color="textPrimary"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon fontSize="small" /> Github
          </Link>
          .
        </MuiAlert>
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
