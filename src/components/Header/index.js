import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Components.
import Nav from '../Nav';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Header = ({ className }) => (
  <header className={classNames(styles.root, className)} role="banner">

    <Nav className={styles.nav} />

  </header>
);

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
