import React from 'react';
import { cleanup } from "@testing-library/react";
import { AxiosResponse } from "axios";
import {MoviesMock} from "./mocks/CanalMoviesComponentMocks";
import actions from "../actions";

const axios = require('axios');
// At the same scope with `require`
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);

describe('loadMoviesList', () => {
    const movies = [MoviesMock, MoviesMock];
    let response = {
        results: movies,
        page: 1,
        total_pages: 1,
        total_results: 2,
    }

    test('', async () => {
        const mockedResponse: AxiosResponse = {
            data: response,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled();
        actions.loadMovieList(1);
        expect(axios.get).toBeTruthy();
    });
});

describe('filterMoviesList', () => {
    const movies = [MoviesMock, MoviesMock];
    let response = {
        results: movies,
        page: 1,
        total_pages: 1,
        total_results: 2,
    }

    test('', async () => {
        const mockedResponse: AxiosResponse = {
            data: response,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled();
        actions.filterMovieList(1, "some query");
        expect(axios.get).toBeTruthy();
    });
});