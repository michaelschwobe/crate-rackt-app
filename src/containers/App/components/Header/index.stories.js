import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

// Siblings.
import Header from './';

//------------------------------------------------------------------------------

storiesOf('Header', module)
  .addDecorator(story =>
    <MemoryRouter>
      {story()}
    </MemoryRouter>,
  )
  .add('default', () => <Header />);
