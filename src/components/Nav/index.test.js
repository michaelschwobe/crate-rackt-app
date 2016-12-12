/* global describe, it */
import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router';

// Siblings.
import Nav from './';

//--------------------------------------------------------------------------------------------------

const NavWithContext = props => (
  <MemoryRouter>
    <Nav {...props} />
  </MemoryRouter>
);

//--------------------------------------------------------------------------------------------------

describe('<Nav />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<NavWithContext />, div);
  });
});
