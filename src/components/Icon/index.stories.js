import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Icon, { icons } from './';

//--------------------------------------------------------------------------------------------------

storiesOf('Icon', module)
  .add('default', () => (
    <div>
      {Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}
    </div>
  ))
  .add('currentColor', () => (
    <div style={{ color: 'green' }}>
      {Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}
    </div>
  ))
  .add('vertical alignment', () => (
    <div>
      <div style={{ fontSize: '1em' }}>
        X{Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}X
      </div>
      <div style={{ fontSize: '2em' }}>
        X{Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}X
      </div>
      <div style={{ fontSize: '4em' }}>
        X{Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}X
      </div>
      <div style={{ fontSize: '8em' }}>
        X{Object.keys(icons).map(icon => <Icon key={icon} type={icon} />)}X
      </div>
    </div>
  ));
