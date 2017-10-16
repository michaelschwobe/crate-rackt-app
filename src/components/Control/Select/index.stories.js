import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import Select from './';

// Utilities.
import {
  optionsArr,
  optionsObj,
  renderControlStories,
} from '../../../../.storybook/utils';

//------------------------------------------------------------------------------

storiesOf('Control/Select', module)
  .add('default', () => (
    <div>
      {renderControlStories(Select, 'select', {
        options: [],
      })}
    </div>
  ))
  .add('wide', () => (
    <div>
      {renderControlStories(Select, 'select', {
        options: [],
        wide: true,
      })}
    </div>
  ))
  .add('optionsArr', () => (
    <div>
      {renderControlStories(Select, 'select', {
        options: optionsArr,
      })}
    </div>
  ))
  .add('optionsObj', () => (
    <div>
      {renderControlStories(Select, 'select', {
        options: optionsObj,
      })}
    </div>
  ))
  .add('mixed', () => (
    <div>
      {renderControlStories(Select, 'select', {
        className: 'example',
        wide: true,
        placeholder: '...',
        options: optionsArr,
        defaultValue: optionsArr[0],
        required: true,
      })}
    </div>
  ));
