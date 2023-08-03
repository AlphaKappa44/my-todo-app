// Image.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image Component', () => {
    // Ensure that the component renders without any errors
    it('renders without errors', () => {
        render(<Image />);
        expect(screen.getByAltText('Todo Icon')).toBeInTheDocument();
    });

    // The alt attribute is essential for accessibility 
    it('sets the correct alt attribute', () => {
        render(<Image />);
        expect(screen.getByAltText('Todo Icon')).toHaveAttribute('alt', 'Todo Icon');
    });


    it('sets the correct source URL', () => {
        render(<Image />);
        const imgElement = screen.getByAltText('Todo Icon');
        expect(imgElement).toHaveAttribute('src', '/noun-todo-favicon.svg');
    });

    it('applies the correct CSS class', () => {
        render(<Image />);
        const imgElement = screen.getByAltText('Todo Icon');
        expect(imgElement).toHaveClass('todo-image-img');
    });
});
