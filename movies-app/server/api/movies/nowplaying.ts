export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const { accessToken } = config

  const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing'

  const nowPlayingMovies = await $fetch(nowPlayingUrl, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
  })

  return {nowPlayingMovies}
})