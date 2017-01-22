import { configure } from '@kadira/storybook';
import 'sanitize.css/sanitize.css';

import '../src/index.css';

//--------------------------------------------------------------------------------------------------

export const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const loremArr = ['Lorem', 'ipsum', 'dolor'];

export const todayISO = (new Date()).toISOString();

export const createControlProps = (type, val) => {
  const obj = {};
  switch (type) {
    case 'checkbox':
    case 'radio':
      obj.text = val ? lorem : 'Example';
      obj.defaultChecked = !!val;
      break;
    case 'select':
      obj.options = val ? loremArr : [];
      obj.defaultValue = val ? 'Lorem' : null;
      break;
    case 'email':
      obj.defaultValue = val ? 'example@example.com' : null;
      break;
    case 'number':
      obj.defaultValue = val ? 5555555555 : null;
      break;
    case 'tel':
      obj.defaultValue = val ? '555-555-5555' : null;
      break;
    case 'week':
      obj.defaultValue = val ? `${todayISO.slice(0, 4)}-W01` : null;
      break;
    case 'time':
      obj.defaultValue = val ? todayISO.slice(11, 23) : null;
      break;
    case 'month':
      obj.defaultValue = val ? todayISO.slice(0, 7) : null;
      break;
    case 'date':
      obj.defaultValue = val ? todayISO.slice(0, 10) : null;
      break;
    case 'datetime-local':
      obj.defaultValue = val ? todayISO.slice(0, 23) : null;
      break;
    default:
      obj.defaultValue = val ? lorem : null;
      break;
  }
  return obj;
};

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
