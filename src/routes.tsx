import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
// import { AuthContext } from './context/AuthProvider';

import { APP_PREFIX_PATH, AUTH_PREFIX_PATH, MENU_PATH_A } from 'constants/path';
import { HOME_PAGE } from 'constants/page';

import AppLayout from 'layouts/app-layout';
import AuthLayout from 'layouts/auth-layout';

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: HOME_PAGE,
    component: loadable(() => import('./pages/home')),
    exact: true,
  },
];

/**
 *
 * Protected Route Component
 *
 */
// const AddListing = Loadable({
//   loader: () => import(/* webpackChunkName: "AddListing" */ './container/AddListing/AddListing'),
//   loading: Loading,
//   modules: ['AddListing'],
// });

/**
 *
 * Not Found Route Component
 *
 */

const Error404 = loadable(() => import('./pages/404'));

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { loggedIn } = useContext(AuthContext);
//   return (
//     <Route
//       render={(props) => (loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />)}
//       {...rest}
//     />
//   );
// };

const RouteInterceptor = ({
  children,
  isAuthenticated,
  path,
  ...rest
}: {
  children: React.ReactNode;
  isAuthenticated: string;
  path: string;
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH_PREFIX_PATH,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/">
          <Redirect to={APP_PREFIX_PATH} />
        </Route> */}
        <Route exact path="/">
          <Redirect to={MENU_PATH_A} />
        </Route>
        <Route path={AUTH_PREFIX_PATH}>
          <AuthLayout />
        </Route>
        {/* <RouteInterceptor path={APP_PREFIX_PATH} isAuthenticated={token}>
          <AppLayout />
        </RouteInterceptor> */}

        {/* {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))} */}
        {/* <ProtectedRoute path={AGENT_ACCOUNT_SETTINGS_PAGE} component={AgentAccountSettingsPage} /> */}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
