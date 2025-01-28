import React from 'react';
import NotFound from '../components/NotFound/NotFound';
import Home from '../components/Home/Home';
import Details from '../components/Page/Details';
import TermsAndCondition from '../components/TermsAndCondition/TermsAndCondition';
import Footer from '../components/Footer/Footer';

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
      {
        path: 'de', // Use empty path for nested base route
        element: <Details />,
      },
    ],
  },
  {
    path: 'project/terms-and-conditions',
    element: <TermsAndCondition/>,
  },
  {
    path: '/footer',
    element: <Footer/>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
