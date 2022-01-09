import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import LanguageSelection from '../components/baseComponents/LanguageSelection';
import Layout from '../components/baseComponents/Layout';
import GearOptimizer from '../components/GearOptimizer';
import URLStateImport from '../components/url-state/URLStateImport';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <URLStateImport />
      <LanguageSelection />
      <MuiAlert elevation={6} variant="filled" severity="warning">
        <Trans>
          The gear optimizer is currently in beta! Templates are not final and phantasm and
          lifesteal damage is inaccurate. Please report potential issues to us in
        </Trans>{' '}
        <Link href="https://discord.gg/Qdt7nFY" color="textPrimary" target="_blank" rel="noopener">
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
      <GearOptimizer />
    </Layout>
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
  }
`;

export default IndexPage;
