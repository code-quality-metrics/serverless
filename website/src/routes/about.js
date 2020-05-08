const siteTemplate = require('../templates/index.html')

function aboutRoute() {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    },
    body: siteTemplate({ page: 'about' }),
    isBase64Encoded: false,
  }
}

module.exports = aboutRoute
