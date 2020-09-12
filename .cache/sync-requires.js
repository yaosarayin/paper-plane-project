const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/src/pages/index.js"))),
  "component---src-pages-join-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/src/pages/join.js"))),
  "component---src-templates-blog-posts-js": hot(preferDefault(require("/Users/ela/Yao/Dev/paper-plane-project/src/templates/BlogPosts.js")))
}

