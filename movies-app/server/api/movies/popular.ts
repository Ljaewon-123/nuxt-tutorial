export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const { accessToken} = config
    const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular'
    const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular'

    // API - 1 
    const popularMovies = await $fetch(popularMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
    })

    // API - 2
    const popularSeries = await $fetch(popularSeriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
    })

    return {popularMovies, popularSeries}
})