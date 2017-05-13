import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../utils';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Textarea = ({
  className,
  id,
  name,
  rows,
  wide,
  required,
  readOnly,
  disabled,
  ...otherProps
}) => {
  const classes = classNames(
    styles.root,
    {
      [styles.small]: !rows,
      [styles.wide]: wide,
      [styles.required]: required,
      [styles.readOnly]: readOnly,
      [styles.disabled]: disabled,
    },
    className,
  );

  const nameSlug = slugify(name);
  const idSlug = id ? slugify(id) : nameSlug;

  return (
    <textarea
      className={classes}
      id={idSlug}
      name={nameSlug}
      rows={rows || 1}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      {...otherProps}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  wide: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  className: null,
  id: null,
  rows: null,
  wide: false,
  required: false,
  readOnly: false,
  disabled: false,
};

export default Textarea;
