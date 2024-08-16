export default defineEventHandler( event => {

  const cookie = getCookie(event, "atToken");

  return cookie
})