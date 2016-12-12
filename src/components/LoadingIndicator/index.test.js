/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import LoadingIndicator from './';

//--------------------------------------------------------------------------------------------------

describe('<LoadingIndicator />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<LoadingIndicator />, div);
  });
});
