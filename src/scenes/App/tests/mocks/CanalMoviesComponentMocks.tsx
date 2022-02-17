import {IPaginatedMovies} from "../../reducer";
import {IMovie} from "../../model/movie";

export const MoviesMock : IMovie = {
    adult: true,
    backdrop_path: 'backdrop_path',
    genre_ids: [0, 1, 2],
    id: 33,
    original_language: 'EN',
    original_title: 'ORIGINAL_TITLE',
    overview: 'Overview',
    popularity: 30,
    poster_path: 'string',
    release_date: new Date().toDateString(),
    title: 'string',
    video: true,
    vote_average: 3,
    vote_count: 3,
}

export const TrendingMoviesMock : IPaginatedMovies = {
    movieList: [MoviesMock, MoviesMock],
    totalPages: 1,
    currentPage: 1,
    totalResults: 1,
    query: 'https://api.themoviedb.org/3/'
}

export const FilteredMoviesMock : IPaginatedMovies = {
    movieList: [MoviesMock],
    totalPages: 1,
    currentPage: 1,
    totalResults: 1,
    query: 'https://api.themoviedb.org/3/'
}
