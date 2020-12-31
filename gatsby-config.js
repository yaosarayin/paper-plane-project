/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Paper Plane Project',
    description: 'Fighting for accessible mental health education'  
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: "standalone",
        icon: "static/ppp-icon.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "gcms",
        url: "https://api-ap-northeast-1.graphcms.com/v2/ckek7ems813vg01z1ffsrhy05/master"
      }

    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions : {
          javascriptEnabled: true,
          modifyVars: {hack: `true; @import "${path.resolve(
            __dirname,
            "./src/styles",
            "theme.less"
          )}";`
          }
        }
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'zh',
        langKeyForNull: 'zh',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
}
