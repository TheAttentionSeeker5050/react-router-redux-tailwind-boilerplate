import { render, screen } from '@testing-library/react';


import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});
