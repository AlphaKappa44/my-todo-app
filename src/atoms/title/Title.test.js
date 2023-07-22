import { render, screen } from '@testing-library/react';
import Input from './input';

test('Input element', () => {
  render(<Input />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
