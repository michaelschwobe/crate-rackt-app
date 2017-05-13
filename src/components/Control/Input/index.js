import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../../utils';

// Components.
import CheckboxRadio, { types as otherTypes } from '../CheckboxRadio';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

export const types = [
  'text',
  'number',
  'password',
  'email',
  'tel',
  'url',
  'search',
  'date',
  'datetime-local',
  'month',
  'week',
  'time',
  ...otherTypes,
];

//--------------------------------------------------------------------------------------------------

const Input = ({
  className,
  type,
  id,
  name,
  wide,
  required,
  readOnly,
  disabled,
  ...otherProps
}) => {
  const Tag = type === 'checkbox' || type === 'radio' ? CheckboxRadio : 'input';

  const classes = classNames(
    styles.root,
    [styles[`${type}`]],
    {
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
    <Tag
      className={classes}
      type={type}
      id={idSlug}
      name={nameSlug}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(types).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  className: null,
  id: null,
  wide: false,
  required: false,
  readOnly: false,
  disabled: false,
};

export default Input;
