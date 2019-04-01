import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PAGES } from './pages';

import App from '../components/app/app';
import HomePage from '../components/home-page/home-page';
import Parent from '../components/parent/parent';
import Lifecycle from '../components/lifecycle/lifecycle';
import Page404 from '../components/page404/page404';

const WrappedApp = (Component, props) => (
  <App appName='Fancy React Redux App'>
    <Component { ...props } />
  </App>
);

export default () => (
  <Switch>
    <Route
      exact path={ PAGES.home.path }
      render={ props => WrappedApp(HomePage, props) }
    />
    <Route
      exact path={ PAGES.parent.path }
      render={ props => WrappedApp(Parent, props) }
    />
    <Route
      exact path={ PAGES.lifecycle.path }
      render={ props => WrappedApp(Lifecycle, props) }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => WrappedApp(Page404, props) }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
