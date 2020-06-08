module.exports = {
  siteMetadata: {
    title: `unStack Africa - Blog`,
    name: `unStack Africa - Blog`,
    siteUrl: `https://unstack.africa`,
    description: `Open-source Based Conference/meetups For Every Engineer/designer & Technical Talents Focused On Hands-on Workshops And World-class Talks From Around The World 🌍`,
    hero: {
      heading: ``,
      maxWidth: 700,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/unstackafrica`,
      },
      {
        name: `github`,
        url: `https://github.com/unstackofficial`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
      {
        resolve: "gatsby-plugin-mailchimp",
        options: {
          endpoint: "https://shodipoayomide.us18.list-manage.com/subscribe/post?u=0b8d2ee1cb63c6f51cc1d8b9d&amp;id=7fe993900c", // mailchimp endpoint
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `unStack Africa`,
        short_name: `unStack`,
        start_url: `/`,
        background_color: `#04113B`,
        theme_color: `#04113B`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
