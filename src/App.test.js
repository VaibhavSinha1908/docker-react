import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('some text shown', () => {
  render(<App />);
  const pElement = screen.getByText(/I was changed/i);
  expect(pElement).toBeInTheDocument();
});

test('some text shown', () => {
  render(<App />);
  const pElement = screen.getByText(/I was changed/i);
  expect(pElement).toBeInTheDocument();
});
