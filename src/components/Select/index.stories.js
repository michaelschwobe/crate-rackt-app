import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Select from './';

//--------------------------------------------------------------------------------------------------

const optionsArr = ['Option A', 'Option B', 'Option C'];

const optionsObj = [
  { id: 'A', text: 'Option A' },
  { id: 'B', text: 'Option B' },
  { id: 'C', text: 'Option C' },
];

//--------------------------------------------------------------------------------------------------

storiesOf('Select', module)
  .add('default', () => (
    <div>
      <div><Select options={[]} name="a0" /> ← default</div>
      <div><Select options={[]} name="a1" placeholder="..." /> ← placeholder</div>
      <div><Select options={[]} name="a2" readOnly /> ← readOnly</div>
      <div><Select options={[]} name="a3" disabled /> ← disabled</div>
      <div><Select options={[]} name="a4" required /> ← required</div>
    </div>
  ))
  .add('defaultValue, wide', () => (
    <div>
      <div><Select options={optionsArr} name="b0" wide defaultValue={'Option B'} /> ↑ array, default</div>
      <div><Select options={optionsArr} name="b1" wide defaultValue={'Option B'} placeholder="..." /> ↑ array, placeholder</div>
      <div><Select options={optionsArr} name="b2" wide defaultValue={'Option B'} readOnly /> ↑ array, readOnly</div>
      <div><Select options={optionsArr} name="b3" wide defaultValue={'Option B'} disabled /> ↑ array, disabled</div>
      <div><Select options={optionsArr} name="b4" wide defaultValue={'Option B'} required /> ↑ array, required</div>
      <br />
      <div><Select options={optionsObj} name="c0" wide defaultValue={'B'} /> ↑ arr of obj, default</div>
      <div><Select options={optionsObj} name="c1" wide defaultValue={'B'} placeholder="..." /> ↑ arr of obj, placeholder</div>
      <div><Select options={optionsObj} name="c2" wide defaultValue={'B'} readOnly /> ↑ arr of obj, readOnly</div>
      <div><Select options={optionsObj} name="c3" wide defaultValue={'B'} disabled /> ↑ arr of obj, disabled</div>
      <div><Select options={optionsObj} name="c4" wide defaultValue={'B'} required /> ↑ arr of obj, required</div>
    </div>
  ));
