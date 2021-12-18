import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from './../pages/home.jsx';
import About from './../pages/about.jsx';
import Contact from './../pages/contact.jsx';

const routes = [
  {
    path: '/',
    content: <Navigate to="/home" />,
  },
  {
    path: '/home',
    content: <Home />,
  },
  {
    path: '/about',
    content: <About />,
  },
  {
    path: '/contact',
    content: <Contact />,
  },
];

export default routes;
