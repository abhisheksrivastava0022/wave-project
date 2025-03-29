import React from "react";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";
import Details from "../components/Page/Details";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/Page/HomePage";
import Faq from "../components/Page/Faq";
import DownloadPDF from "../components/DownloadPDF/DownloadPDF";
import FeaturedCompany from "../components/FeaturedCompany/FeaturedCompany";
import Companies from "../components/Page/Companies";

const basePrefix = ""; // Ensure this matches your Vite config

export const routes = [
  {
    path: basePrefix, // Adjust base path for the router
    element: <HomePage />,
    children: [
      {
        path: "", // Use empty path for nested base route
        element: <HomePage />,
      },
    ],
  },
  // {
  //   path: '/project',
  //   element: <HomePage />,
  // },
  {
    path: "project", // Use empty path for nested base route
    element: <Home />,
  },
  {
    path: "project/terms-and-conditions",
    element: <TermsAndCondition />,
  },
  {
    path: "featured-companies",
    element: <FeaturedCompany />,
  },
  {
    path: "project/faq",
    element: <Faq />,
  },
  {
    path: "project/companies",
    element: <Companies />,
  },
  {
    path: "/download",
    element: <DownloadPDF />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
