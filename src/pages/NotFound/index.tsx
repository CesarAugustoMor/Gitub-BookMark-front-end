import React from 'react';
import { Redirect } from 'react-router-dom';

const Main: React.FC = () => (
  <Redirect
    to={{
      pathname: '/',
    }}
  />
);

export default Main;
