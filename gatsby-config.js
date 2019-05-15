module.exports = {
  siteMetadata: {
    title: `Kimberlee Johnson`,
  },
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          resolve: ["gatsby-remark-copy-linked-files"],
        },
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: "standalone",
          icon: "src/images/icon.png", // This path is relative to the root of the site.
        },
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }