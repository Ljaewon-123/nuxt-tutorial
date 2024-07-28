export default defineEventHandler(async(event) => {
  const posts = [

  ]

  const body = await readBody(event)

  posts.push(body.newPost)
  return posts
})