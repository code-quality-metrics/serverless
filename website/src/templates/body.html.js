const { html } = require('../lib/html-vip')
const main = require('./pages/main.html')
const post = require('./pages/post.html')
const about = require('./pages/about.html')
const notFound = require('./pages/not-found.html')

const pages = {
  main,
  post,
  about,
  notFound,
}

module.exports = ctx => html`
  <body>
    <h1>A Millennial's Blog</h1>
    ${(pages[ctx.page] || pages.notFound)(ctx)}
  </body>
`
