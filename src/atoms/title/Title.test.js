// Title.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
    it('renders without errors', () => {
        render(<Title />);
        const titleElement = screen.getByText('Todo App');
        expect(titleElement).toBeInTheDocument();
    });

    it('applies the correct CSS class', () => {
        render(<Title />);
        const titleElement = screen.getByText('Todo App');
        expect(titleElement).toHaveClass('main-title');
    });
});
