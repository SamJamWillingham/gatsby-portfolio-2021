// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-markdown-remark-frontmatter-slug-js": () => import("./../../../src/pages/{MarkdownRemark.frontmatter__slug}.js" /* webpackChunkName: "component---src-pages-markdown-remark-frontmatter-slug-js" */)
}
