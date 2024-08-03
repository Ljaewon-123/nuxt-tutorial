export default defineEventHandler(async event => {

  const config = useRuntimeConfig(event)
  
  const body = await readBody(event)
  const data = $fetch(`${config.apiUrl}/auth/local/signin`, {
    method: 'post',
    body
  })
  console.log('Call This?')
  return data
})