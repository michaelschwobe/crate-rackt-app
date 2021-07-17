import 'stop-runaway-react-effects/hijack';

import '../src/index.css';

// -----------------------------------------------------------------------------

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
  },
};
