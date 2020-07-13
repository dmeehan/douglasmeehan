module.exports = {
  siteMetadata: {
    title: `Douglas Meehan`,
    description: `UX/UI Designer / Data Visualization / Mapping`,
    author: `Douglas Meehan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Douglas Meehan`,
        short_name: `dm`,
        start_url: `/`,
        background_color: `#63C9D7`,
        theme_color: `#63C9D7`,
        display: `minimal-ui`,
        icon: `src/images/contour_bg.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
