/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@storybook/react';

// Styles (global).
import 'sanitize.css';
import '../src/index.css';

//------------------------------------------------------------------------------

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
