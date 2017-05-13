import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../utils';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Label = (props) => {
  const {
    className,
    htmlFor,
    text,
    isRequired,
    isDescription,
    isError,
    ...otherProps
  } = props;

  const classes = classNames(styles.root, {
    [styles.description]: !!isDescription && !isRequired,
    [styles.error]: !!isError && !isRequired,
  }, className);

  const htmlForSlug = slugify(htmlFor);

  const labelText = isRequired ? text + String.fromCharCode(160) : text;

  return (
    <label className={classes} htmlFor={htmlForSlug} {...otherProps}>
      {labelText}{!!isRequired && <span className={styles.required}>*</span>}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  isRequired: PropTypes.bool,
  isDescription: PropTypes.bool,
  isError: PropTypes.bool,
};

Label.defaultProps = {
  className: null,
  isRequired: false,
  isDescription: false,
  isError: false,
};

export default Label;
