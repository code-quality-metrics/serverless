const siteTemplate = require('../templates/index.html')

function notFoundRoute() {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    },
    body: siteTemplate({ page: 'notFound' }),
    isBase64Encoded: false,
  }
}

module.exports = notFoundRoute
