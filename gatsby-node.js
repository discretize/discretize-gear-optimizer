const webpack = require(`webpack`);
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // for some reason the modules option is required, else the css breaks entirely.
    resolve: { symlinks: false, modules: [path.resolve('./node_modules')] },
  });
};
