import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from './../pages/home.jsx';
import Introduce from './../pages/introduce.jsx';
import Portfolio from './../pages/portfolio.jsx';
import Etc from './../pages/etc.jsx';

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
    path: '/introduce',
    content: <Introduce />,
  },
  {
    path: '/portfolio',
    content: <Portfolio />,
  },
  {
    path: '/etc',
    content: <Etc />,
  },
];

export default routes;
