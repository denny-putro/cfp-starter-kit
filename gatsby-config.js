module.exports = {
  siteMetadata: {
    title: `cfp-starter-kit`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 3178592,
        sv: 6,
      },
    },
  ]
};