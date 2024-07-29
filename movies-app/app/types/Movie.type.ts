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

export interface ApiResponse {
  movies: {
    results: Movie[];
  };
  series: {
    results: Series[];
  };
}

export interface NowPlaying{
  nowPlayingMovies: {
    results: Movie[]
  }
}