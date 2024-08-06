export default defineEventHandler((event) => {
  setResponseStatus(event, 202)
  // 404 하면 not found뜬다 
})
