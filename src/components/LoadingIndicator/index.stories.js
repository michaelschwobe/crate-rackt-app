import React from 'react';
import { storiesOf } from '@storybook/react';

// Siblings.
import LoadingIndicator from './';

//------------------------------------------------------------------------------

storiesOf('LoadingIndicator', module)
  .addDecorator(story =>
    <div style={{ background: '#808080' }}>
      {story()}
    </div>,
  )
  .add('default', () =>
    <div>
      <LoadingIndicator />X
      <LoadingIndicator speed={2} />X
      <LoadingIndicator size={2} />X
      <LoadingIndicator size={4} />
    </div>,
  )
  .add('inverse', () =>
    <div>
      <LoadingIndicator inverse />X
      <LoadingIndicator inverse speed={2} />X
      <LoadingIndicator inverse size={2} />
    </div>,
  )
  .add('block', () =>
    <div>
      <LoadingIndicator block />
      <LoadingIndicator block speed={2} />
      <LoadingIndicator block size={2} />
      <LoadingIndicator block inverse />
      <LoadingIndicator block inverse speed={2} />
      <LoadingIndicator block inverse size={2} />
    </div>,
  );
