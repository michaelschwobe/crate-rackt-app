import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Textarea from './';

//--------------------------------------------------------------------------------------------------

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

//--------------------------------------------------------------------------------------------------

storiesOf('Textarea', module)
  .add('default', () => (
    <div>
      <div><Textarea type="text" name="a0" /> ← default</div>
      <div><Textarea type="text" name="a1" readOnly /> ← readOnly</div>
      <div><Textarea type="text" name="a2" disabled /> ← disabled</div>
      <div><Textarea type="text" name="a0" rows={3} /> ← rows</div>
    </div>
  ))
  .add('defaultValue, wide', () => (
    <div>
      <div><Textarea type="text" name="b0" wide defaultValue={lorem} /> ↑ default</div>
      <div><Textarea type="text" name="b1" wide defaultValue={lorem} readOnly /> ↑ readOnly</div>
      <div><Textarea type="text" name="b2" wide defaultValue={lorem} disabled /> ↑ disabled</div>
      <div><Textarea type="text" name="b0" wide defaultValue={lorem} rows={3} /> ↑ rows</div>
    </div>
  ));
