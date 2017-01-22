import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Label from './';

//--------------------------------------------------------------------------------------------------

storiesOf('Label', module)
  .add('default', () => (
    <div>
      <div><Label htmlFor="Example" text="Example" /> ← default</div>
      <div><Label htmlFor="Example" text="Example" isRequired /> ← isRequired</div>
      <div><Label htmlFor="Example" text="Example" isDescription /> ← isDescription</div>
      <div><Label htmlFor="Example" text="Example" isError /> ← isError</div>
      <div><Label htmlFor="Example" text="Example" isRequired isDescription isError /> ← all</div>
    </div>
  ));
