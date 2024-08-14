export default defineEventHandler( event => {

  deleteCookie(event, "atToken");
  deleteCookie(event, "rtToken");

  return 'done'
})