/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import App from './';

//--------------------------------------------------------------------------------------------------

describe('<App />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
