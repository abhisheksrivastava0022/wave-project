import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
const basePrefix = import.meta.env.VITE_BASE_PREFIX;
const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App
