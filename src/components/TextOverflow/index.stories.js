import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import TextOverflow from './';

// Utilities.
import { lorem } from '../../../.storybook/utils';

//------------------------------------------------------------------------------

storiesOf('TextOverflow', module)
  .add('default', () => <TextOverflow text={lorem} />)
  .add('width from props', () => <TextOverflow width="200px" text={lorem} />)
  .add('width from parent', () =>
    <div style={{ width: '100px' }}>
      <TextOverflow text={lorem} />
    </div>,
  );
