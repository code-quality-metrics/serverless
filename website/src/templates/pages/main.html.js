const { html } = require('../../lib/html-vip')

module.exports = ctx => html`
  <h2>Posts:</h2>
  ${ctx.posts.reduce(function (acc, post) {
    return acc + html` <a href="/post/${post.path}">${post.title}</a> <br><br>`
  }, '')}
  <br>
  <br>
  <a href="/about">About</a>
`
