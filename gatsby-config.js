module.exports = {
  pathPrefix: '/discretize-gear-optimizer',
  siteMetadata: {
    language: 'en',
    siteUrl: 'https://discretize.github.io/discretize-gear-optimizer/',
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

    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mui-emotion',

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // eslint-disable-next-line no-unused-vars
        typeName: ({ node, object, isArray }) => object['GraphQL ID'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/presetdata`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://discretize.github.io/discretize-gear-optimizer/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/',
            languages: ['en', 'zh'],
          },
        ],
      },
    },
    'gatsby-plugin-use-query-params',
  ],
};
