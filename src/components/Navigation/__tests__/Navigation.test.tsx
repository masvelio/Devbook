import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import Navigation from '../Navigation';

const mockFn = jest.fn();
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    logout: () => {
      mockFn();
    },
  }),
}));

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
});

test('Loads navigation bar and reacts for changing routes', async () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );

  expect(window.location.href).toBe('http://localhost/');
  fireEvent.click(screen.getByText('My profile'));
  expect(window.location.href).toBe('http://localhost/profile');
  fireEvent.click(screen.getByText('Developers'));
  expect(window.location.href).toBe('http://localhost/developers');
});

test('Fires logout action on logout button click', async () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );

  const logoutBtn = screen.getByRole('button', {
    name: /log out/i,
  });

  expect(mockFn).not.toHaveBeenCalled();
  fireEvent.click(logoutBtn);
  expect(mockFn).toHaveBeenCalled();
});
