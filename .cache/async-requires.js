// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-join-js": () => import("./../../../src/pages/join.js" /* webpackChunkName: "component---src-pages-join-js" */),
  "component---src-templates-blog-posts-js": () => import("./../../../src/templates/BlogPosts.js" /* webpackChunkName: "component---src-templates-blog-posts-js" */)
}
