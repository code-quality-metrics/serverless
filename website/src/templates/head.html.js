const html = String.raw
const fs = require('fs')
const path = require('path')
const style = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8')

module.exports = function head({ name, content }) {
  return html`
    <head>
      <meta charset="UTF-8" />
      <meta name="${name}" content="${content}" />
      <!-- avoid favicon request -->
      <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />
      <style>
        ${style}
      </style>
    </head>
  `
}
