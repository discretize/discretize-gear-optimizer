import { APILanguageProvider } from '@discretize/gw2-ui-new';
import { Layout } from '@discretize/react-discretize-components';
import { Typography } from '@mui/material';
import { graphql } from 'gatsby';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import ErrorBoundary from '../../components/baseComponents/ErrorBoundary';
import LanguageSelection from '../../components/baseComponents/LanguageSelection';
import BuildPage from '../../components/BuildPage';

const IndexPage = ({ location, data }) => {
  const { language } = useI18next();

  return (
    <APILanguageProvider value={language}>
      <Layout>
        <LanguageSelection location={location} />
        <Typography variant="h3" sx={{ paddingBottom: 2 }}>
          <Trans>Shared Build</Trans>
        </Typography>

        <ErrorBoundary location="BuildPage">
          <BuildPage data={data} />
        </ErrorBoundary>
      </Layout>
    </APILanguageProvider>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    images: allImageSharp {
      edges {
        node {
          gatsbyImageData
          original {
            src
          }
        }
      }
    }
  }
`;

export default IndexPage;
