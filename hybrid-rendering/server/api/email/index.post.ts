import { cachedGHStars } from "~~/server/utils/catch"

export default defineEventHandler(async (event) => {
  
  const stars = await cachedGHStars('12ab56').catch(() => 0)

  return { code: '12ab56' }
})