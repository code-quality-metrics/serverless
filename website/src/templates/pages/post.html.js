const { html } = require('../../lib/html-vip')

module.exports = ({ post }) => html`
  <article>
    <i>${post.title}</i>
    <p>${post.content}<p>
  </article>
`
