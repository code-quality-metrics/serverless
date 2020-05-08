const siteTemplate = require('../templates/index.html')
const { getPosts } = require('../lib/database')

async function mainRoute() {

  const posts = await getPosts()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    },
    body: siteTemplate({ page: 'main', posts }),
    isBase64Encoded: false,
  }
}

module.exports = mainRoute
