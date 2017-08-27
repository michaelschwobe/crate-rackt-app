/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import Icon from './';

//------------------------------------------------------------------------------

describe('<Icon />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<Icon type="arrowRight" />, div);
  });
});
