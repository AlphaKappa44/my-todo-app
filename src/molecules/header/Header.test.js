// Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    it('renders without errors', () => {
        render(<Header />);
        const headerContainer = screen.getByText(/Todo App/i);
        expect(headerContainer).toBeInTheDocument();
    });

    it('renders the Image component', () => {
        render(<Header />);
        const imageComponent = screen.getByAltText('Todo Icon');
        expect(imageComponent).toBeInTheDocument();
    });

    it('renders the Title component', () => {
        render(<Header />);
        const titleComponent = screen.getByText(/Todo App/i);
        expect(titleComponent).toBeInTheDocument();
    });

    it('applies the correct CSS class to the header container', () => {
        render(<Header />);
        const headerContainer = screen.getByTestId('header-container');
        expect(headerContainer).toHaveClass('header-container');
    });
});
