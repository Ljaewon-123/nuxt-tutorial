export default defineEventHandler( async event => {
  await sendRedirect(event, '/old-page', 302)
})