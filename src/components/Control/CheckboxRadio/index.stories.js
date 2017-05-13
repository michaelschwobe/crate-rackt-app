import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import CheckboxRadio from './';

// Config.
import { lorem, setControlProps, renderControlStories } from '../../../../.storybook/config';

const types = ['checkbox', 'radio'];

//--------------------------------------------------------------------------------------------------

storiesOf('CheckboxRadio', module)
  .add('default', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        otherProps.text = lorem.substring(0, 11);
        return renderControlStories(CheckboxRadio, type, otherProps);
      })}
    </div>
  ))
  .add('defaultChecked', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        otherProps.text = lorem.substring(0, 11);
        otherProps.defaultChecked = true;
        return renderControlStories(CheckboxRadio, type, otherProps);
      })}
    </div>
  ))
  .add('reverse', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        otherProps.text = lorem.substring(0, 11);
        otherProps.reverse = true;
        return renderControlStories(CheckboxRadio, type, otherProps);
      })}
    </div>
  ))
  .add('wide', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, false);
        otherProps.type = type;
        otherProps.text = lorem.substring(0, 11);
        otherProps.wide = true;
        return renderControlStories(CheckboxRadio, type, otherProps);
      })}
    </div>
  ))
  .add('mixed', () => (
    <div>
      {types.map(type => {
        const otherProps = setControlProps(type, true);
        otherProps.className = 'example';
        otherProps.type = type;
        otherProps.reverse = true;
        otherProps.wide = true;
        otherProps.required = true;
        return renderControlStories(CheckboxRadio, type, otherProps);
      })}
    </div>
  ));
