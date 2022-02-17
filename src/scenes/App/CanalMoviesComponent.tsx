import React, {useEffect, useState} from 'react';
import './CanalMovies.css';
import SearchComponent from "./components/SearchComponent";
import MovieComponent from "./components/MovieComponent";
import {IMovie} from "./model/movie";
import InfiniteScroll from "react-infinite-scroll-component";

const defaultProps = {};

export interface IPaginatedMovies {
    movieList: IMovie[];
    totalPages: number;
    currentPage: number;
    totalResults: number;
    query?: string;
}

interface IAppComponentProps {
    trendingMovies: IPaginatedMovies;
    filteredMovies: IPaginatedMovies;
    loadMovieList: Function;
    filterMovieList: Function;
}

const FilteredMoviesView = ({movies, getMoreData}) => (
    <InfiniteScroll
        dataLength={movies.movieList.length}
        next={getMoreData}
        hasMore={movies.totalPages !== movies.currentPage}
        scrollableTarget="body-main"
        style={{overflow: 'none'}}
        endMessage={<p>No further results found</p>}
        loader={<></>}
    >
        <div className="row">
            {movies.movieList?.map((movie, index) =>
                (<MovieComponent
                    key={index}
                    originalName={movie.original_title ? movie.original_title : movie.name}
                    posterPath={movie.poster_path}
                    voteAverage={movie.vote_average}
                />))
            }
        </div>
    </InfiniteScroll>);


const CanalMoviesComponent = ({
                                  trendingMovies,
                                  filteredMovies,
                                  filterMovieList,
                                  loadMovieList
                              }: IAppComponentProps): React.ReactElement => {
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        loadMovieList(1);
    }, [])

    useEffect(() => {
        if (query) filterMovieList(filteredMovies.currentPage, query);
    }, [query])

    const getMoreData = () => {
        loadMovieList(trendingMovies.currentPage + 1);
    }

    const getMoreDataFiltered = () => {
        filterMovieList(filteredMovies.currentPage + 1, query);
    }

    return (
        <div className="App">
            <nav className="navbar navbar-light p-0">
                <div className="container-fluid px-5">
                    <a className="navbar-brand">CANAL Movies</a>
                </div>
            </nav>
            <SearchComponent filter={setQuery}/>
            <FilteredMoviesView movies={query ? filteredMovies : trendingMovies}
                                getMoreData={query ? getMoreDataFiltered : getMoreData}/>)
        </div>
    );
};

CanalMoviesComponent.defaultProps = defaultProps;

export default CanalMoviesComponent;
