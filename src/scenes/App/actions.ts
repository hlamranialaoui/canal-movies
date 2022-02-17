/* ********       VARIABLES     ******** */

import ACTION_TYPES from './types';
import {BASE_URL, NEXT_PUBLIC_API_KEY} from "../../conf/constants";
import axios from "axios";

/** instead of axios real Api calls */

function loadMovieList(currentPage: number = 1) {
    return (dispatch: any) => {
        axios.get(`${BASE_URL}trending/all/day?api_key=${NEXT_PUBLIC_API_KEY}&page=${currentPage}`).then((res) =>
            dispatch({
                type: ACTION_TYPES.GET_MOVIE_LIST,
                payload: res.data,
            }),
        );
    };
}

function filterMovieList(currentPage: number = 1, query: string) {
    return (dispatch: any) => {
        axios.get(`${BASE_URL}search/movie?api_key=${NEXT_PUBLIC_API_KEY}&page=${currentPage}&query=${query}`).then((res) =>
            dispatch({
                type: ACTION_TYPES.FILTER_MOVIE,
                payload: res.data,
            }),
        );
    };
}

const actions = {
    loadMovieList: loadMovieList,
    filterMovieList: filterMovieList,
};

export {actions as default};
