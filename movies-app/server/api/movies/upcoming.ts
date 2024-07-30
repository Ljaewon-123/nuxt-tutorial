export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event)
  const { accessToken} = config

  const upcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming'

  const upcomingMovies = await $fetch(upcomingMoviesUrl, {
       method: 'get',
       headers: {
           accept: 'application/json',
           Authorization: `Bearer ${accessToken}`
       },
  })

  return {upcomingMovies}
})