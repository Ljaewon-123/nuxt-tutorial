export default defineEventHandler(async(event) => {
  const posts = [
    {id: 1, title: 'gmai'},
  ]

  const body = await readBody(event)

  posts.push(body.newPost)
  posts.slice(0,1)
  return posts
})