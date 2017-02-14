import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import CheckboxRadio from './';

//--------------------------------------------------------------------------------------------------

storiesOf('CheckboxRadio', module)
  .add('checkbox', () => (
    <div>
      <div><CheckboxRadio type="checkbox" name="a0" text="a0" /> ← default </div>
      <div><CheckboxRadio type="checkbox" name="a1" text="a1" readOnly /> ← readOnly </div>
      <div><CheckboxRadio type="checkbox" name="a2" text="a2" disabled /> ← disabled </div>
      <div><CheckboxRadio type="checkbox" name="a3" text="a3" required /> ← required </div>
      <br />
      <div><CheckboxRadio type="checkbox" name="b1" text="b1" defaultChecked /> ← default, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b2" text="b2" defaultChecked readOnly /> ← readOnly, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b3" text="b3" defaultChecked disabled /> ← disabled, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b4" text="b4" defaultChecked required /> ← required, defaultChecked </div>
      <br />
      <div>
        <CheckboxRadio type="checkbox" name="c" id="c1" text="c1" />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c2" text="c2" defaultChecked />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c3" text="c3" />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c4" text="c4" /> ← inline
      </div>
    </div>
  ))
  .add('radio', () => (
    <div>
      <div><CheckboxRadio type="radio" name="a0" text="a0" /> ← default </div>
      <div><CheckboxRadio type="radio" name="a1" text="a1" readOnly /> ← readOnly </div>
      <div><CheckboxRadio type="radio" name="a2" text="a2" disabled /> ← disabled </div>
      <div><CheckboxRadio type="radio" name="a3" text="a3" required /> ← required </div>
      <br />
      <div><CheckboxRadio type="radio" name="b1" text="b1" defaultChecked /> ← default, defaultChecked </div>
      <div><CheckboxRadio type="radio" name="b2" text="b2" defaultChecked readOnly /> ← readOnly, defaultChecked </div>
      <div><CheckboxRadio type="radio" name="b3" text="b3" defaultChecked disabled /> ← disabled, defaultChecked </div>
      <div><CheckboxRadio type="radio" name="b4" text="b4" defaultChecked required /> ← required, defaultChecked </div>
      <br />
      <div>
        <CheckboxRadio type="radio" name="c" id="c1" text="c1" />{' '}
        <CheckboxRadio type="radio" name="c" id="c2" text="c2" defaultChecked />{' '}
        <CheckboxRadio type="radio" name="c" id="c3" text="c3" />{' '}
        <CheckboxRadio type="radio" name="c" id="c4" text="c4" /> ← inline
      </div>
    </div>
  ))
  .add('reverse', () => (
    <div>
      <div><CheckboxRadio type="checkbox" name="a0" text="a0" reverse /> ← default </div>
      <div><CheckboxRadio type="checkbox" name="a1" text="a1" reverse readOnly /> ← readOnly </div>
      <div><CheckboxRadio type="checkbox" name="a2" text="a2" reverse disabled /> ← disabled </div>
      <div><CheckboxRadio type="checkbox" name="a3" text="a3" reverse required /> ← required </div>
      <br />
      <div><CheckboxRadio type="checkbox" name="b1" text="b1" reverse defaultChecked /> ← default, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b2" text="b2" reverse defaultChecked readOnly /> ← readOnly, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b3" text="b3" reverse defaultChecked disabled /> ← disabled, defaultChecked </div>
      <div><CheckboxRadio type="checkbox" name="b4" text="b4" reverse defaultChecked required /> ← required, defaultChecked </div>
      <br />
      <div>
        <CheckboxRadio type="checkbox" name="c" id="c1" text="c1" reverse />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c2" text="c2" reverse defaultChecked />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c3" text="c3" reverse />{' '}
        <CheckboxRadio type="checkbox" name="c" id="c4" text="c4" reverse /> ← inline
      </div>
    </div>
  ));
