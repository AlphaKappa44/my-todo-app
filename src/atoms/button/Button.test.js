import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Input element', () => {
  render(<Button />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});

test('onClick handler is called', () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click Me</Button>);
  const buttonElement = screen.getByRole('button');
  buttonElement.click();
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('Button renders children content', () => {
  const buttonText = 'Click Me';
  render(<Button>{buttonText}</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveTextContent(buttonText);
});
