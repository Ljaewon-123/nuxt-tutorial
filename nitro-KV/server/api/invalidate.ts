export default defineEventHandler(async (event) => {
  const cacheStorage = useStorage('cache')
  // cache key -> invalidate the entry
  const key = 'cache:nitro:handlers:_:apitest.i0EMpNQjWJ.json'
  const hasItem = await cacheStorage.hasItem(key)
  if(hasItem) {
    await cacheStorage.removeItem(key)
  }
  return {
    hasItem: await cacheStorage.hasItem(key)
  }
})