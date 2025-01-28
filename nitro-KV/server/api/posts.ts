import { getPosts } from "./utils/posts"

export default defineEventHandler(async (event) => {
  const posts = await getPosts(event, 1)
})