
module.exports = {
  siteMetadata: {
    title: 'EmerGence',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'EmerGence- A Disaster Relief App',
        short_name: 'EmerGence',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#c62828',
        display: 'minimal-ui',
        orientation: "portrait-primary",
        description: "A simple photo and message sharing app with offline functionality.",
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-offline`
  ],
}
