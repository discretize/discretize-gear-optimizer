exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: { symlinks: false },
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
