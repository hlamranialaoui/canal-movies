import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CanalMoviesComponent from "../CanalMoviesComponent";
import {FilteredMoviesMock, TrendingMoviesMock} from "./mocks/CanalMoviesComponentMocks";

afterEach(cleanup);

describe('renders canal movies app entry', () => {

    const loadMoviesList = () => TrendingMoviesMock;
    const filteredMoviesList = () => FilteredMoviesMock;

    test('renders movies', async () => {
        const { asFragment } = render(
            <CanalMoviesComponent
                trendingMovies={TrendingMoviesMock}
                filteredMovies={FilteredMoviesMock}
                loadMovieList={loadMoviesList}
                filterMovieList={filteredMoviesList} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
