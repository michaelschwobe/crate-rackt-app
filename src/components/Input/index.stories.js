import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Config.
import { createControlProps } from '../../../.storybook/config';

// Siblings.
import Input, { types } from './';

//--------------------------------------------------------------------------------------------------

storiesOf('Input', module)
  .add('default', () => (
    <div>
      {types.map((type) => {
        const otherProps = createControlProps(type, false);
        return (
          <div key={type}>
            <div><Input type={type} name={type} {...otherProps} /> ← {type}, default</div>
            <div><Input type={type} name={type} {...otherProps} readOnly /> ← {type}, readOnly</div>
            <div><Input type={type} name={type} {...otherProps} disabled /> ← {type}, disabled</div>
            <div><Input type={type} name={type} {...otherProps} required /> ← {type}, required</div>
            <br />
          </div>
        );
      })}
    </div>
  ))
  .add('defaultValue, wide', () => (
    <div>
      {types.map((type) => {
        const otherProps = createControlProps(type, true);
        return (
          <div key={type}>
            <div><Input type={type} name={type} {...otherProps} wide /> ↑ {type}, default</div>
            <div><Input type={type} name={type} {...otherProps} wide readOnly /> ↑ {type}, readOnly</div>
            <div><Input type={type} name={type} {...otherProps} wide disabled /> ↑ {type}, disabled</div>
            <div><Input type={type} name={type} {...otherProps} wide required /> ↑ {type}, required</div>
            <br />
          </div>
        );
      })}
    </div>
  ));
