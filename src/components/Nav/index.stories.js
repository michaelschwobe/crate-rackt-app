import React from 'react';
import { MemoryRouter } from 'react-router';
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
    <MemoryRouter location="/example">
      <Nav />
    </MemoryRouter>
  ));
