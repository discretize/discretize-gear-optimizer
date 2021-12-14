// eslint-disable-next-line no-unused-vars
const webpack = require(`webpack`);
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // for some reason the modules option is required, else the css breaks entirely.
    resolve: { symlinks: false, modules: [path.resolve('./node_modules')] },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type presetBuffsList {
      hidden: Boolean
    }
    type presetAffixesList {
      hidden: Boolean
    }
    type presetTraitsList {
      hidden: Boolean
    }
    type presetExtrasList {
      hidden: Boolean
    }
    type presetDistributionList {
      hidden: Boolean
    }
    type presetInfusionsList {
      hidden: Boolean
    }
  `;
  createTypes(typeDefs);
};
