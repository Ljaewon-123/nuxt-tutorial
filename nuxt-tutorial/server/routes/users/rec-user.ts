export default defineEventHandler(async(event) => {
  const body = await readBody(event)
  const name = body.name
  console.log(name)
  return name
})