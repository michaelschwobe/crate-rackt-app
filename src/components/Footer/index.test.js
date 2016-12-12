/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import Footer from './';

//--------------------------------------------------------------------------------------------------

describe('<Footer />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<Footer />, div);
  });
});
