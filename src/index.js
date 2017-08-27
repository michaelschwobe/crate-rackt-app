import React from 'react';
import { render } from 'react-dom';

// Styles (global).
import 'sanitize.css';
import './index.css';

// Utils.
import './utils/polyfills';
import registerServiceWorker from './utils/registerServiceWorker';

// Containers.
import App from './containers/App';

//------------------------------------------------------------------------------

render(<App />, document.getElementById('root'));

// Init local cache / offline capability.
registerServiceWorker();
