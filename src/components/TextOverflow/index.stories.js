import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import TextOverflow from './';

// Config.
import { lorem } from '../../../.storybook/config';

//--------------------------------------------------------------------------------------------------

storiesOf('TextOverflow', module)
  .add('default', () => <TextOverflow text={lorem} />)
  .add('width from props', () => <TextOverflow width="200px" text={lorem} />)
  .add('width from parent', () => (
    <div style={{ width: '100px' }}>
      <TextOverflow text={lorem} />
    </div>
  ));
