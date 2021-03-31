import React from 'react';
import { Switch } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={SingIn} path="/" exact />
      <Route component={SignUp} path="/signup" />
      {/* <Route component={News} path="/novidades" />
      <Route component={Post} path="/post/:post_id" />
      <Route component={LecturesEvents} path="/palestras-eventos" />
      <Route component={SearchTag} path="/busca-tag" />
      <Route component={AnnualEvents} path="/eventos-anuais" />
      <Route component={Points} path="/ecopontos" />
      <Route component={Point} path="/ecoponto/:point_id" />
      <Route component={Contact} path="/contato" /> */}
      <Route component={NotFound} path="/" />
    </Switch>
  );
};

export default Routes;
