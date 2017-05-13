import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Label from './';

// Config.
import { lorem } from '../../../.storybook/config';

const text = lorem.substring(0, 17);

//--------------------------------------------------------------------------------------------------

storiesOf('Label', module).add('default', () => (
  <div>
    <div><Label text={text} htmlFor="id" /> ← default</div>
    <div><Label text={text} htmlFor="id" isRequired /> ← isRequired</div>
    <div><Label text={text} htmlFor="id" isDescription /> ← isDescription</div>
    <div><Label text={text} htmlFor="id" isError /> ← isError</div>
  </div>
));
