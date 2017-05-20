import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Nav = ({ className, ...props }) => (
  <nav className={classNames(styles.root, className)} {...props}>

    <h1 className={styles.heading}>Menu</h1>

    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to="/" exact>
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to="/about">
          About
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} activeClassName={styles.active} to="/example">
          NoMatch
        </NavLink>
      </li>
    </ul>

  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: null,
};

export default Nav;
