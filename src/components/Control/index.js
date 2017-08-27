import React from 'react';
import PropTypes from 'prop-types';

// Components.
import Select from './Select';
import Textarea from './Textarea';
import Input, { types as inputTypes } from './Input';

//------------------------------------------------------------------------------

export const types = ['select', 'textarea', ...inputTypes];

//------------------------------------------------------------------------------

const Control = ({ type, ...otherProps }) => {
  let Tag;
  let needsTypeAttr;

  switch (type) {
    case 'select':
      Tag = Select;
      needsTypeAttr = false;
      break;
    case 'textarea':
      Tag = Textarea;
      needsTypeAttr = false;
      break;
    case 'checkbox':
    case 'radio':
    default:
      Tag = Input;
      needsTypeAttr = true;
      break;
  }

  return <Tag type={needsTypeAttr ? type : null} {...otherProps} />;
};

Control.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
};

export default Control;
