import React from 'react';
import { Router, Route, hashHistory} from 'react-router';

import Cart from './components/containers/cart';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Cart} />
  </Router>
);

export default router;
