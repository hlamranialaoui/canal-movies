import React from 'react';
import { render, cleanup, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";
import axios, { AxiosResponse } from "axios";
import actions from "../actions";



afterEach(cleanup);

export default {
    get: jest.fn().mockResolvedValue({ data: {} })
};

describe('loadMoviesList', () => {
    
})


