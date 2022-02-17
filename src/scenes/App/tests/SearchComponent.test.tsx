import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SearchComponent from "../components/SearchComponent";

afterEach(cleanup);

describe('renders canal search component', () => {

    test('renders search component', async () => {
        const { asFragment } = render(
            <SearchComponent
                filter={'originalName'}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
