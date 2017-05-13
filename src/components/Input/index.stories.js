import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Input, { types } from './';

// Config.
import { setControlProps, renderControlStories } from '../../../.storybook/config';

//--------------------------------------------------------------------------------------------------

storiesOf('Input', module)
  .add('default', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        return renderControlStories(Input, type, otherProps);
      })}
    </div>
  ))
  .add('wide', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        otherProps.wide = true;
        return renderControlStories(Input, type, otherProps);
      })}
    </div>
  ))
  .add('mixed', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, true);
        otherProps.type = type;
        otherProps.wide = true;
        otherProps.required = true;
        return renderControlStories(Input, type, otherProps);
      })}
    </div>
  ));
