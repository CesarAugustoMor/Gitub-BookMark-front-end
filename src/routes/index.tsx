import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/theme';

import SingIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

import GlobalStyle from '../styles/global';

import Route from './Route';

const Routes: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route component={SingIn} path="/" exact />
        <Route component={SignUp} path="/signup" />

        <Route component={Dashboard} path="/dashboard" isPrivate />
        <Route component={Details} path="/detalhes/:user" isPrivate />
        <Route component={Profile} path="/perfil" isPrivate />
        <Route component={NotFound} path="/" />
      </Switch>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Routes;
