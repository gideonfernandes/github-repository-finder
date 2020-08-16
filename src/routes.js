import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/repositorio" component={Repository} />
    </BrowserRouter>
  );
};

export default Routes;
