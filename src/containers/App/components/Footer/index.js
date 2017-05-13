import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Footer = ({ className }) => (
  <footer className={classNames(styles.root, className)} role="contentinfo">

    <div className={styles.copyright}>
      <small className={styles.small}>
        <span className={styles.avoidwrap}>&copy; {(new Date()).getFullYear()} <a className={styles.link} href="http://example.com">Example, LLC</a>.</span>{' '}
        <span className={styles.avoidwrap}>All Rights Reserved.</span>
      </small>
    </div>

  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
