const http = require('http')
const lambda = require('./src').handler

function genEvent({ req, body }) {
  const url = new URL(req.url, `http://${req.headers.host}`)

  return {
    path: url.pathname,
    body,
    httpMethod: req.httpMethod,
    queryStringParameters: url.query,
    headers: req.headers,
    requestContext: {
      authorizer: {
        claims: {
          'cognito:username': 'test-at-upturncredit.com',
        },
      },
    },
  }
}

const server = http.createServer(function (req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', '*')
  // res.setHeader('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    console.log('[Test Server] OPTIONS Method')
    res.end()
    return
  }

  let body = []
  req.on('data', function (chunk) {
    body.push(chunk)
  })

  req.on('end', function () {
    body = Buffer.concat(body).toString('utf8')

    const event = genEvent({ req, body })

    lambda(event)
      .then(function ({ body, headers }) {
        res.writeHead(
          200,
          Object.assign(
            {
              'Content-Length': Buffer.byteLength(body),
            },
            headers,
          ),
        )

        res.write(body)
        res.end()
      })
      .catch(function (error) {
        console.error(error)
        res.writeHeader(500, { 'Content-Type': 'text/html' })
        res.write('INTERNAL_SERVER_ERROR')
        res.end()
      })
  })
})

const port = 4004
server.listen(port, function () {
  console.log(`🌎 Listening on Port ${port} 🔥🔥🔥`)
})
