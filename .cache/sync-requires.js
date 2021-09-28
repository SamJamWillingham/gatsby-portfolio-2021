
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/SFWillingham/Desktop/gatsby-portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/SFWillingham/Desktop/gatsby-portfolio/src/pages/index.js")),
  "component---src-pages-markdown-remark-frontmatter-slug-js": preferDefault(require("/Users/SFWillingham/Desktop/gatsby-portfolio/src/pages/{MarkdownRemark.frontmatter__slug}.js"))
}

