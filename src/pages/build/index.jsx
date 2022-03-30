import { APILanguageProvider } from "@discretize/gw2-ui-new";
import { Layout } from "@discretize/react-discretize-components";
import { Typography } from "@mui/material";
import * as React from "react";
import ErrorBoundary from "../../components/baseComponents/ErrorBoundary";
import LanguageSelection from "../../components/baseComponents/LanguageSelection";
import BuildPage from "../../components/BuildPage";

const IndexPage = () => {
  //const { language } = useI18next();
  const language = "en";
  return (
    <APILanguageProvider value={language}>
      <Layout>
        <LanguageSelection />
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

export default IndexPage;
