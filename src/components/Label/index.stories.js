import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import Label from './';

// Utilities.
import { lorem } from '../../../.storybook/utils';

//------------------------------------------------------------------------------

const text = lorem.substring(0, 17);

//------------------------------------------------------------------------------

storiesOf('Label', module).add('default', () => (
  <div>
    <div>
      <Label text={text} htmlFor="id" /> ← default
    </div>
    <div>
      <Label text={text} htmlFor="id" isRequired /> ← isRequired
    </div>
    <div>
      <Label text={text} htmlFor="id" isDescription /> ← isDescription
    </div>
    <div>
      <Label text={text} htmlFor="id" isError /> ← isError
    </div>
  </div>
));
