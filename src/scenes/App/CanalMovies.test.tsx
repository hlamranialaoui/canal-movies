import React from 'react';
import {render, screen} from '@testing-library/react';
import CanalMovies from './CanalMovies'

it('renders title', () => {
    render(<CanalMovies/>);
    expect(screen.getByText('Search by movie name')).toBeInTheDocument();
});