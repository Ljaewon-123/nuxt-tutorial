export default defineEventHandler(async event => {
  const userQuery = getQuery(event)
  const {searchTerm} = userQuery
  const config = useRuntimeConfig(event)
  const { accessToken} = config
  const movieSearchUrl = 'https://api.themoviedb.org/3/search/movie'
  const seriesSearchUrl = 'https://api.themoviedb.org/3/search/tv'

  const movies = await $fetch(movieSearchUrl, {
      method: 'get',
      headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
      },
      query: {
          query: searchTerm
      }
  })

  const series = await $fetch(seriesSearchUrl, {
      method: 'get',
      headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
      },
      query: {
          query: searchTerm
      }
  })

  return {movies, series}
})