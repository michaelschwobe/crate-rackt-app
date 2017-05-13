import React from 'react';
import { configure } from '@kadira/storybook';

// Styles: reset.
import 'sanitize.css/sanitize.css';

// Styles: global.
import '../src/index.css';

//--------------------------------------------------------------------------------------------------
// Storybook Utils
//--------------------------------------------------------------------------------------------------

export const labelBefore = 'Label Before';
export const labelAfter = 'Label After';
export const descBefore = 'Description Before';
export const descAfter = 'Description After';
export const addonBefore = '$';
export const addonAfter = '%';

export const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const optionsArr = ['Option A', 'Option B', 'Option C'];

export const optionsObj = [
  { id: 'A', text: 'Option A' },
  { id: 'B', text: 'Option B' },
  { id: 'C', text: 'Option C' },
];

export const todayISO = new Date().toISOString();

export const setControlProps = (type, val) => {
  const obj = {};
  switch (type) {
    case 'checkbox':
    case 'radio':
      obj.text = val ? lorem : '';
      obj.defaultChecked = !!val;
      break;
    case 'select':
      obj.options = val ? optionsArr : [];
      obj.defaultValue = val ? optionsArr[0] : null;
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

export const renderControlStories = (Component, name, otherProps) => (
  <div key={name}>
    <div><Component name={`${name}_default`} {...otherProps} /> ← default</div>
    <div><Component name={`${name}_readOnly`} {...otherProps} readOnly /> ← readOnly</div>
    <div><Component name={`${name}_disabled`} {...otherProps} disabled /> ← disabled</div>
    <br />
  </div>
);

//--------------------------------------------------------------------------------------------------
// Storybook Config
//--------------------------------------------------------------------------------------------------

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
