import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/theme';

import SingIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

import GlobalStyle from '../styles/global';

import Route from './Route';

const Routes: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
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

        <Route component={Dashboard} path="/dashboard" isPrivate />
        <Route component={NotFound} path="/" />
      </Switch>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Routes;
