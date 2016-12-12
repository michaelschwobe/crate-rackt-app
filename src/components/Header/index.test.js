/* global describe, it */
import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router';

// Siblings.
import Header from './';

//--------------------------------------------------------------------------------------------------

const HeaderWithContext = props => (
  <MemoryRouter>
    <Header {...props} />
  </MemoryRouter>
);

//--------------------------------------------------------------------------------------------------

describe('<Header />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<HeaderWithContext />, div);
  });
});
