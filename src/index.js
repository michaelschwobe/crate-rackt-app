import React from 'react';
import { render } from 'react-dom';
import 'sanitize.css/sanitize.css';

// Containers.
import App from './containers/App';

// Siblings.
import './index.css';

//--------------------------------------------------------------------------------------------------

render(<App />, document.getElementById('root'));
