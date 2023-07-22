import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Input element', () => {
  render(<Button />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
