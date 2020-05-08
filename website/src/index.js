const post = require('./routes/post')
const about = require('./routes/about')
const main = require('./routes/main')
const notFound = require('./routes/not-found')

exports.handler = async function (event) {
  const routes = [
    { regexp: /^\/post(?:\/([^\/#\?]+?))[\/#\?]?$/i, fn: post },
    { regexp: /^\/about[\/#\?]?$/i, fn: about },
    { regexp: /^\/[\/#\?]?$/i, fn: main },
    { regexp: /.*/i, fn: notFound }
  ]

  let match
  const route = routes.find(route => (match = route.regexp.exec(event.path)))

  return await route.fn({ event, match })
}
