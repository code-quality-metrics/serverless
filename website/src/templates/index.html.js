const html = String.raw

const head = require('./head.html')
const body = require('./body.html')

module.exports = function index(ctx) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      ${head(ctx)}
      ${body(ctx)}
    </html>
  `
}
