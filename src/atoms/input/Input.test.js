import { render, screen } from '@testing-library/react';
// Import userEvent from the correct library
import userEvent from '@testing-library/user-event'; 
import Input from './Input';

test('Input element', () => {
  render(<Input />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('Input element has correct value', () => {
  const initialValue = 'Initial value';
  render(<Input value={initialValue} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveValue(initialValue);
});

test('onChange event handler is called when input value changes', () => {
  const onChangeMock = jest.fn();
  render(<Input onChange={onChangeMock} />);
  const inputElement = screen.getByRole('textbox');
  const newValue = 'New value';
  // Use userEvent.type for simulating input changes
  userEvent.type(inputElement, newValue); 
  expect(onChangeMock).toHaveBeenCalledTimes(newValue.length);
  expect(inputElement.value).toBe(newValue);
});

test('Input element has correct placeholder', () => {
  const placeholderText = 'Enter your name';
  render(<Input placeholder={placeholderText} />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toHaveAttribute('placeholder', placeholderText);
});