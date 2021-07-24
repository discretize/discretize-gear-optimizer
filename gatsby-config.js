module.exports = {
  siteMetadata: {
    "siteUrl": "https://www.yourdomain.tld",
    "title": "Discretize Gear Optimizer"
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node, object, isArray }) => object["GraphQL ID"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/data`
      }
    }
  ]
};
