import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Nav from './';

//--------------------------------------------------------------------------------------------------

storiesOf('Nav', module)
  .add('default', () => (
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  ))
  .add('active on "/example"', () => (
    <MemoryRouter initialEntries={['/', '/about', '/example']} initialIndex={2}>
      <Nav />
    </MemoryRouter>
  ));
