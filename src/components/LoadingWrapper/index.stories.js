import React from 'react';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import LoadingWrapper from './';

//--------------------------------------------------------------------------------------------------

const Child = () => <div style={{ color: '#666' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>;

//--------------------------------------------------------------------------------------------------

storiesOf('LoadingWrapper', module)
  .add('default', () => (
    <LoadingWrapper>
      <Child />
    </LoadingWrapper>
  ))
  .add('loading', () => (
    <div>
      <LoadingWrapper loading>
        <Child />
      </LoadingWrapper>
    </div>
  ))
  .add('overlay', () => (
    <div>
      <LoadingWrapper loading overlay>
        <Child />
      </LoadingWrapper>
      <div style={{ color: '#999', background: 'black' }}>
        <LoadingWrapper loading overlay inverse>
          <Child />
        </LoadingWrapper>
      </div>
    </div>
  ));
