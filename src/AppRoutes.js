/**
 * Created by billyct on 2016/10/9.
 */
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router';

import App from './App';
import Chapter_1_1 from './containers/Chapter_1_1';
import Chapter_1_2 from './containers/Chapter_1_2';

const AppRoutes = (
  <Route>
    <Redirect from="/" to="/chapter_1_1" />
    <Route path="/" component={App}>
      <Route path="/chapter_1_1" component={Chapter_1_1}></Route>
      <Route path="/chapter_1_2" component={Chapter_1_2}></Route>
    </Route>
  </Route>

);

export default AppRoutes;