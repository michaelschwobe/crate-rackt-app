import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import Input, { types } from './';

// Utilities.
import {
  setControlProps,
  renderControlStories,
} from '../../../../.storybook/utils';

//------------------------------------------------------------------------------

storiesOf('Control/Input', module)
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
