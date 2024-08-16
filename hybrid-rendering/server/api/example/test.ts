export default defineEventHandler( async event => {
  await sendRedirect(event, '/playground', 302)
})