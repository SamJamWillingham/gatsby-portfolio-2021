
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/SFWillingham/Desktop/gatsby-portfolio/src/pages/index.js"))
}

