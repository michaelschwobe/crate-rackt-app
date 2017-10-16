import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import LoadingWrapper from './';

// Utilities.
import { lorem } from '../../../.storybook/utils';

//------------------------------------------------------------------------------

const Child = () => (
  <div style={{ color: '#666' }}>
    {lorem} {lorem}
  </div>
);

//------------------------------------------------------------------------------

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
