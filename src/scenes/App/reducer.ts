/* ********       IMPORTS       ******** */

import ACTION_TYPES from './types';
import {IMovie} from "./model/movie";
import {uniqBy} from "lodash";

/* ********      VARIABLES      ******** */

export interface IPaginatedMovies {
    movieList: IMovie[];
    totalPages: number;
    currentPage: number;
    totalResults: number;
    query?: string;
}

interface IAppState {
    trendingMovies: IPaginatedMovies;
    filteredMovies: IPaginatedMovies;
}

const initialState: IAppState = {
    trendingMovies: {
        movieList: [],
        totalPages: 0,
        currentPage: 1,
        totalResults: 0,
    },
    filteredMovies: {
        movieList: [],
        totalPages: 0,
        currentPage: 1,
        totalResults: 0,
    }

};

export default function reducer(state: IAppState = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_MOVIE_LIST: {
            return {
                ...state,
                trendingMovies: {
                    movieList: [...state.trendingMovies.movieList, ...action.payload.results],
                    currentPage: action.payload.page,
                    totalPages: action.payload.total_pages,
                    totalResults: action.payload.total_results
                }
            };
        }

        case ACTION_TYPES.FILTER_MOVIE: {
            return {
                ...state,
                filteredMovies: {
                    movieList:
                        uniqBy([...action.payload.results, ...state.filteredMovies.movieList], 'id'),
                    currentPage: action.payload.page,
                    totalPages: action.payload.total_pages,
                    totalResults: action.payload.total_results
                }
            };
        }
        default:
            return state;
    }
}
