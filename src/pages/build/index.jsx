import { makeStyles, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { useSelector } from 'react-redux';
import LanguageSelection from '../../components/baseComponents/LanguageSelection';
import ResultCharacter from '../../components/sections/results/ResultCharacter';
import URLStateImport from '../../components/url-state/URLStateImport';
import withLayout from '../../hocs/withLayout';
import { getCharacter, getWeapons } from '../../state/slices/buildPage';

const useStyles = makeStyles((theme) => ({
  headline: {
    paddingBottom: theme.spacing(2),
  },
}));

// markup
const IndexPage = ({ data }) => {
  const classes = useStyles();

  const character = useSelector(getCharacter);
  const weapons = useSelector(getWeapons);

  return (
    <>
      <URLStateImport sagaType="IMPORT_STATE_CHARACTER" clearUrlOnSuccess={false} />

      <LanguageSelection />
      <Typography variant="h2" className={classes.headline}>
        <Trans>Build</Trans>
      </Typography>

      {character && <ResultCharacter data={data} character={character} weapons={weapons} />}
    </>
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
    presetBuffs: presetBuffs {
      list {
        name
        value
        hidden
      }
    }
    presetAffixes: presetAffixes {
      list {
        name
        value
        hidden
      }
    }
    presetTraits: presetTraits {
      list {
        name
        traits
        skills
        profession
        hidden
      }
    }
    presetExtras: presetExtras {
      list {
        name
        value
        profession
        hidden
      }
    }
    presetDistribution: presetDistribution {
      list {
        name
        value
        profession
        hidden
      }
    }
    templates {
      id
      list {
        class
        builds {
          id
          name
          traits
          specialization
          boons
          priority
          distribution
          extras
        }
      }
    }
    presetInfusions {
      list {
        name
        value
        hidden
      }
    }
  }
`;

export default withLayout({ disableContainer: false })(IndexPage);
