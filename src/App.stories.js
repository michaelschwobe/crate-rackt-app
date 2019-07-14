import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Local modules.
import App from './App';

// -----------------------------------------------------------------------------

storiesOf('App', module)
  // .addDecorator(withKnobs)
  .add('default', () => <App />);
