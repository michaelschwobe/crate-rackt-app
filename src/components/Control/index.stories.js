import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Control, { types } from './';

// Utilities.
import { setControlProps, renderControlStories } from '../../../.storybook/utils';

//--------------------------------------------------------------------------------------------------

storiesOf('Control', module).add('default', () => (
  <div>
    {types.map(type => {
      const otherProps = setControlProps(type, false);
      otherProps.type = type;
      return renderControlStories(Control, type, otherProps);
    })}
  </div>
));
