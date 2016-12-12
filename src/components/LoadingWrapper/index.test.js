/* global describe, it */
import React from 'react';
import { render } from 'react-dom';

// Siblings.
import LoadingOrChildren from './';

//--------------------------------------------------------------------------------------------------

describe('<LoadingOrChildren />', () => {
  it('should render without crashing', () => {
    const Child = () => <div>Example</div>;
    const div = document.createElement('div');
    render(<LoadingOrChildren><Child /></LoadingOrChildren>, div);
  });
});
