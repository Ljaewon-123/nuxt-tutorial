export default defineEventHandler(async(event) => {
  const name = getRouterParam(event, 'name')
  const job = getRouterParam(event, 'job')

  const info = {
    name,
    job
  }

  // await sendRedirect(event, `info`)
  return info

})