module.exports = {
  siteMetadata: {
    "siteUrl": "https://www.yourdomain.tld",
    "title": "Discretize Gear Optimizer"
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data-test/`
      }
    }
  ]
};
