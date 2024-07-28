export default defineEventHandler(async(event) => {
  const posts = [
    {id: 1, title: 'gmai'},
  ]

  const body = await readBody(event)

  posts.push(body.newPost)
  posts[0].title = body.title
  return posts
})