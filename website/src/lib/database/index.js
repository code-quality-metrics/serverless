const posts = require('./posts.json')

async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return posts
}

async function findPost(path) {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return posts.find((post) => post.path === path)
}

module.exports = { getPosts, findPost }