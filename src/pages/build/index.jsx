import { APILanguageProvider } from '@discretize/gw2-ui-new';
import { Layout } from '@discretize/react-discretize-components';
import { Typography } from '@mui/material';
import * as React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import BackgroundImage from '../../components/baseComponents/BackgroundImage';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import LanguageSelection from '../../components/baseComponents/LanguageSelection';
import BuildPage from '../../components/BuildPage';

const IndexPage = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <APILanguageProvider value={language}>
      <BackgroundImage />
      <Layout>
        <LanguageSelection />
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          <Trans>Shared Build</Trans>
        </Typography>

        <ErrorBoundary location="BuildPage">
          <BuildPage />
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};

export default IndexPage;
