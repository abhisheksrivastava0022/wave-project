// import React from 'react';
import React, { Suspense, lazy } from 'react';
//import HomePage from "../components/HomePage/HomePage";
//import AboutPage from '../components/AboutPage/AboutPage';
// import NotFound from '../components/NotFound/NotFound';

import NotFound from '../components/NotFound/NotFound';

export const routes = [

    {
        path: '/',
        element: <NotFound />,
        children: [
            {
                path: '/',
                // element: <HomePage />,
                element: (
                    <NotFound />

                ),

            },

        ],
        loader: async () => {

            return false;
        },
    },

    {
        path: '*', // This catches all undefined routes
        element: <NotFound />,
        //   errorElement: <ErrorBoundary />,
    },

];
