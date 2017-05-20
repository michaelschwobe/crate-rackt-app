import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Textarea from './';

// Utilities.
import { lorem, renderControlStories } from '../../../../.storybook/utils';

//--------------------------------------------------------------------------------------------------

storiesOf('Textarea', module)
  .add('default', () => (
    <div>
      {renderControlStories(Textarea, 'textarea', null)}
    </div>
  ))
  .add('wide', () => (
    <div>
      {renderControlStories(Textarea, 'textarea', {
        wide: true,
      })}
    </div>
  ))
  .add('mixed', () => (
    <div>
      {renderControlStories(Textarea, 'textarea', {
        className: 'example',
        rows: 5,
        wide: true,
        defaultValue: lorem,
        required: true,
      })}
    </div>
  ));
