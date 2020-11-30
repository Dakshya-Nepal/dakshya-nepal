require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Dakshya Nepal`,
    description: `We Believe In Skilled Nepal`,
    author: `@dakshyanepal`,
    socialImage: "images/social.png",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/dakshya-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "@fika/gatsby-source-cockpit",
      options: {
        token: process.env.GATSBY_API_KEY,
        baseUrl: process.env.GATSBY_API_URL,
        locales: ["en"],
        collections: [],
        singletons: [],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-6HJYQP9MW0",
        head: false,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
