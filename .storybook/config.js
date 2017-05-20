import { configure } from '@kadira/storybook';

// Styles: reset.
import 'sanitize.css/sanitize.css';

// Styles: global.
import '../src/index.css';

const req = require.context('../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
