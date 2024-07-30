<template>
<div>
  <section>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Featured Movies</h1>

    <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies">
            <MovieCard
                :poster_path="mov.poster_path"
                :title="mov.title"
                :id="mov.id"
                :overview="mov.overview"
                :release_date="mov.release_date"
                :popularity="mov.popularity"
                :item="mov"
            />
        </li>
        <br><br>
    </ul>

</section>
<section>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Featured Tv Series</h1>

    <ul class="grid grid-cols-5 gap">
        <li v-for="tvSeries in series">
            <SeriesCard
                :poster_path="tvSeries.poster_path"
                :name="tvSeries.name"
                :overview="tvSeries.overview"
                :first_air_date="tvSeries.first_air_date"
                :popularity="tvSeries.popularity"
                :item="tvSeries"
            />

        </li>
    </ul>
</section>
</div>
</template>

<script setup lang="ts">
interface Movie {
  id: number;
  title: string;
  // 다른 영화 속성들
}

interface Series {
  id: number;
  title: string;
  // 다른 시리즈 속성들
}

interface ApiResponse {
  movies: {
    results: Movie[];
  };
  series: {
    results: Series[];
  };
}


// const movies = useState<any[]>(() => [])
// const series = useState<any[]>(() => [])

const movies = ref()
const series = ref()

const {data} = await useFetch('/api/movies/discover',{
  transform: (data: ApiResponse) => {
    const movies = data.movies.results
    const series = data.series.results
    return { movies, series }
  }
})

movies.value = data.value?.movies
series.value = data.value?.series


</script>