import { render, screen } from '@testing-library/react';
import App from './App';

test('to do app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});
