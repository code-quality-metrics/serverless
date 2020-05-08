const siteTemplate = require('../templates/index.html')
const { findPost } = require('../lib/database')

async function postRoute({ match }) {

  const postPath = match[1]
  const post = await findPost(postPath)
  const page = post ? 'post' : 'notFound'

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    },
    body: siteTemplate({ page, post }),
    isBase64Encoded: false,
  }
}

module.exports = postRoute
