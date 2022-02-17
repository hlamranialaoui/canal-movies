import React from 'react';
import { cleanup, render } from '@testing-library/react';
import MovieComponent from "../components/MovieComponent";

afterEach(cleanup);

describe('renders canal movie component', () => {

    test('renders movie component', async () => {
        const { asFragment } = render(
            <MovieComponent
                originalName={'originalName'}
                posterPath={'posterPath'}
                voteAverage={2}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
