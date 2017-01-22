/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import Label from './';

//--------------------------------------------------------------------------------------------------

describe('<Label />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<Label />, div);
  });
});
