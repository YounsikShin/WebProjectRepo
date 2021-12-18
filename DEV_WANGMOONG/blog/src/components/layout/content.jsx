import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './../../config/page-route.jsx';

class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={routes[0].path} element={routes[0].content} />
        <Route path={routes[1].path} element={routes[1].content} />
        <Route path={routes[2].path} element={routes[2].content} />
        <Route path={routes[3].path} element={routes[3].content} />
      </Routes>
    );
  }
}

export default Content;
