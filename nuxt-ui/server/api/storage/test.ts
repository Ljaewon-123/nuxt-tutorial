export default defineEventHandler(async (event) => {
  // List all keys with
  const keys = await useStorage('redis').getKeys()
  
  // Set a key with
  await useStorage('redis').setItem('foo', 'bar')
  await useStorage('redis').setItem('foo22', 'bar')

  // Remove a key with
  await useStorage('redis').removeItem('foo')

  console.log(keys)
  const cookies = parseCookies(event)

  console.log(cookies,'@!@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

  return keys
})
