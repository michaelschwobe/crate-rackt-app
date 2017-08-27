/* global describe, it */

import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

// Siblings.
import Button from './';

//------------------------------------------------------------------------------

const ButtonWithContext = props =>
  <MemoryRouter>
    <Button {...props} />
  </MemoryRouter>;

//------------------------------------------------------------------------------

describe('<Button />', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    render(<ButtonWithContext text="Example" />, div);
  });
});
