import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Nav = ({ className, ...props }) => (
  <nav className={classNames(styles.root, className)} {...props} role="navigation">

    <h1 className={styles.heading}>Menu</h1>

    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link className={styles.link} activeClassName={styles.active} to="/" activeOnlyWhenExact>Home</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} activeClassName={styles.active} to="/about">About</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} activeClassName={styles.active} to="/example">NoMatch</Link>
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
