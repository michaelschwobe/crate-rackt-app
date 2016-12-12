import { configure } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';

import '../src/index.css';

//--------------------------------------------------------------------------------------------------

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
