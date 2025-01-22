import React from 'react';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';

const basePrefix = '/project'; // Ensure this matches your Vite config

export const routes = [
  {
    path: basePrefix, // Adjust base path for the router
    element: <Home />,
    children: [
      {
        path: '', // Use empty path for nested base route
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
