import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contact';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
     path: "/about",
    element: <About />,
   },
 {
    path: "/blog",
  element: <Blog />,
 },
  {
    path: "/contact",
    element: <Contacts />,
  },
  // {
  //   path: "/teams",
  //   element: <TeamPage />,
  // },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
