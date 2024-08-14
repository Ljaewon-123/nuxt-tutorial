export const chcheCookie = defineCachedFunction(async () => {
  // 결과를 캐시하는거라 애매함 
  const data = await $fetch('/api/token/verification-cookies', {method:'POST'})

  return data
}, {
  maxAge: 60 * 60,
  name: 'verification-cookies',
  getKey: (code: string) => code
})