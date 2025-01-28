import type { H3Event } from 'h3'
async function getPostUnCached(num: number) {
  return await $fetch('https://jsonplaceholder.typicode.com/posts/' + num)
}

export const getPosts = defineCachedFunction( (_event: H3Event ,num: number) => {
  return getPostUnCached(num)
}, {
  maxAge: 20,
  // Works like defineCachedEventHandler
})