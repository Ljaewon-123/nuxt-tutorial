export default defineEventHandler( event => {

  const cookie = setCookie(event, "atToken", 'test');

  return cookie
})