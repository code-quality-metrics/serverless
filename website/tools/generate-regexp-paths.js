const { pathToRegexp } = require("path-to-regexp")

const paths = [
  '/post/:id',
  '/about',
  '/',
]
const keys = paths.map(() => [])

const regexps = paths.map((path, index) => pathToRegexp(path, keys[index]))

console.log(regexps)
console.log(keys)