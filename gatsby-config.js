module.exports = {
  siteMetadata: {
    'siteUrl': 'https://www.yourdomain.tld',
    'title': 'Discretize Gear Optimizer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `./src/assets/images`,
      },
    },
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
