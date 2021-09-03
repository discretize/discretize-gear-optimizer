module.exports = {
  pathPrefix: '/discretize-gear-optimizer',
  siteMetadata: {
    language: 'en',
    siteUrl: 'https://old.discretize.eu',
    title: 'GW2 | Discretize [dT] - Discretize Gear Optimizer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `./src/assets/images`,
      },
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node, object, isArray }) => object['GraphQL ID'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/data`,
      },
    },
  ],
};
