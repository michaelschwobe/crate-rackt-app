import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

// -----------------------------------------------------------------------------

/**
 * (Re-)configure Storybook UI at runtime.
 * @link https://www.npmjs.com/package/@storybook/theming
 */
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'crate-rackt-app',
    }),
    showPanel: true,
    panelPosition: 'right',
  },
});

/**
 * Show additional information for your stories.
 * @link https://www.npmjs.com/package/@storybook/addon-info
 */
addDecorator(withInfo);

// Automatically import all files ending in `*.stories.js` within `src/`.
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
