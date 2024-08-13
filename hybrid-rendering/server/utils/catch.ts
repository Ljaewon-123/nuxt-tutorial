export const cachedGHStars = defineCachedFunction(async (code: string) => {
  
  await useStorage().setItem('test:code', { code: code })

  return { code: code }
}, {
  maxAge: 60 * 60,
  name: 'ghStars',
  getKey: (code: string) => code
})