import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

//--------------------------------------------------------------------------------------------------

const RoutePrivate = ({ component: Component, authed, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props =>
      authed === true
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }, // eslint-disable-line react/prop-types
            }}
          />}
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool,
};

RoutePrivate.defaultProps = {
  authed: false,
};

export default RoutePrivate;
