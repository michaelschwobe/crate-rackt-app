import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@kadira/storybook';

// Siblings.
import Button from './';

//--------------------------------------------------------------------------------------------------

storiesOf('Button', module)
  .addDecorator(story => (
    <MemoryRouter>
      {story()}
    </MemoryRouter>
  ))
  .add('default', () => (
    <div>
      <div><Button text="Example" /> ← text as props.text, button</div>
      <div><Button type="reset" text="Example" /> ← text as props.text, reset</div>
      <div><Button type="submit" text="Example" /> ← text as props.text, submit</div>
      <div><Button type="anchor" href="/" text="Example" /> ← text as props.text, anchor</div>
      <div><Button type="link" href="/" text="Example" /> ← text as props.text, link</div>
      <br />
      <div><Button>Example</Button> ← text as children, button</div>
      <div><Button type="reset">Example</Button> ← text as children, reset</div>
      <div><Button type="submit">Example</Button> ← text as children, submit</div>
      <div><Button type="anchor" href="/">Example</Button> ← text as children, anchor</div>
      <div><Button type="link" href="/">Example</Button> ← text as children, link</div>
    </div>
  ))
  .add('theme', () => (
    <div>
      <div><Button theme="primary" text="Example" /> ← primary, button</div>
      <div><Button theme="primary" type="reset" text="Example" /> ← primary, reset</div>
      <div><Button theme="primary" type="submit" text="Example" /> ← primary, submit</div>
      <div><Button theme="primary" type="anchor" href="/" text="Example" /> ← primary, anchor</div>
      <div><Button theme="primary" type="link" href="/" text="Example" /> ← primary, link</div>

      <div><Button theme="secondary" text="Example" /> ← secondary, button</div>
      <div><Button theme="secondary" type="reset" text="Example" /> ← secondary, reset</div>
      <div><Button theme="secondary" type="submit" text="Example" /> ← secondary, submit</div>
      <div><Button theme="secondary" type="anchor" href="/" text="Example" /> ← secondary, anchor</div>
      <div><Button theme="secondary" type="link" href="/" text="Example" /> ← secondary, link</div>

      <div><Button theme="tertiary" text="Example" /> ← tertiary, button</div>
      <div><Button theme="tertiary" type="reset" text="Example" /> ← tertiary, reset</div>
      <div><Button theme="tertiary" type="submit" text="Example" /> ← tertiary, submit</div>
      <div><Button theme="tertiary" type="anchor" href="/" text="Example" /> ← tertiary, anchor</div>
      <div><Button theme="tertiary" type="link" href="/" text="Example" /> ← tertiary, link</div>

      <div><Button theme="danger" text="Example" /> ← danger, button</div>
      <div><Button theme="danger" type="reset" text="Example" /> ← danger, reset</div>
      <div><Button theme="danger" type="submit" text="Example" /> ← danger, submit</div>
      <div><Button theme="danger" type="anchor" href="/" text="Example" /> ← danger, anchor</div>
      <div><Button theme="danger" type="link" href="/" text="Example" /> ← danger, link</div>

      <div><Button theme="warning" text="Example" /> ← warning, button</div>
      <div><Button theme="warning" type="reset" text="Example" /> ← warning, reset</div>
      <div><Button theme="warning" type="submit" text="Example" /> ← warning, submit</div>
      <div><Button theme="warning" type="anchor" href="/" text="Example" /> ← warning, anchor</div>
      <div><Button theme="warning" type="link" href="/" text="Example" /> ← warning, link</div>

      <div><Button theme="success" text="Example" /> ← success, button</div>
      <div><Button theme="success" type="reset" text="Example" /> ← success, reset</div>
      <div><Button theme="success" type="submit" text="Example" /> ← success, submit</div>
      <div><Button theme="success" type="anchor" href="/" text="Example" /> ← success, anchor</div>
      <div><Button theme="success" type="link" href="/" text="Example" /> ← success, link</div>

      <div><Button theme="info" text="Example" /> ← info, button</div>
      <div><Button theme="info" type="reset" text="Example" /> ← info, reset</div>
      <div><Button theme="info" type="submit" text="Example" /> ← info, submit</div>
      <div><Button theme="info" type="anchor" href="/" text="Example" /> ← info, anchor</div>
      <div><Button theme="info" type="link" href="/" text="Example" /> ← info, link</div>
    </div>
  ))
  .add('round', () => (
    <div>
      <div><Button round theme="primary" text="Example" /> ← round, button</div>
      <div><Button round theme="primary" type="reset" text="Example" /> ← round, reset</div>
      <div><Button round theme="primary" type="submit" text="Example" /> ← round, submit</div>
      <div><Button round theme="primary" type="anchor" href="/" text="Example" /> ← round, anchor</div>
      <div><Button round theme="primary" type="link" href="/" text="Example" /> ← round, link</div>
    </div>
  ))
  .add('wide', () => (
    <div>
      <div><Button wide theme="primary" text="Example" /> ↑ wide, button</div>
      <div><Button wide theme="primary" type="reset" text="Example" /> ↑ wide, reset</div>
      <div><Button wide theme="primary" type="submit" text="Example" /> ↑ wide, submit</div>
      <div><Button wide theme="primary" type="anchor" href="/" text="Example" /> ↑ wide, anchor</div>
      <div><Button wide theme="primary" type="link" href="/" text="Example" /> ↑ wide, link</div>
    </div>
  ))
  .add('padding', () => (
    <div>
      <div><Button padding theme="primary" text="Example" /> ← padding, button</div>
      <div><Button padding theme="primary" type="reset" text="Example" /> ← padding, reset</div>
      <div><Button padding theme="primary" type="submit" text="Example" /> ← padding, submit</div>
      <div><Button padding theme="primary" type="anchor" href="/" text="Example" /> ← padding, anchor</div>
      <div><Button padding theme="primary" type="link" href="/" text="Example" /> ← padding, link</div>

      <div>
        <Button padding theme="primary" text="Example" />
        <Button padding theme="primary" type="reset" text="Example" />
        <Button padding theme="primary" type="submit" text="Example" />
        <Button padding theme="primary" type="anchor" href="/" text="Example" />
        <Button padding theme="primary" type="link" href="/" text="Example" /> ← Vertical alignment
      </div>
    </div>
  ))
  .add('icons', () => (
    <div>
      <div><Button iconBefore="arrowRight" text="Example" /> ← iconBefore, text as props.text, button</div>
      <div><Button iconBefore="arrowRight" type="reset" text="Example" /> ← iconBefore, text as props.text, reset</div>
      <div><Button iconBefore="arrowRight" type="submit" text="Example" /> ← iconBefore, text as props.text, submit</div>
      <div><Button iconBefore="arrowRight" type="anchor" href="/" text="Example" /> ← iconBefore, text as props.text, anchor</div>
      <div><Button iconBefore="arrowRight" type="link" href="/" text="Example" /> ← iconBefore, text as props.text, link</div>

      <div><Button iconAfter="arrowLeft" text="Example" /> ← iconAfter, text as props.text, button</div>
      <div><Button iconAfter="arrowLeft" type="reset" text="Example" /> ← iconAfter, text as props.text, reset</div>
      <div><Button iconAfter="arrowLeft" type="submit" text="Example" /> ← iconAfter, text as props.text, submit</div>
      <div><Button iconAfter="arrowLeft" type="anchor" href="/" text="Example" /> ← iconAfter, text as props.text, anchor</div>
      <div><Button iconAfter="arrowLeft" type="link" href="/" text="Example" /> ← iconAfter, text as props.text, link</div>

      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" text="Example" /> ← both icons, text as props.text, button</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="reset" text="Example" /> ← both icons, text as props.text, reset</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="submit" text="Example" /> ← both icons, text as props.text, submit</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="anchor" href="/" text="Example" /> ← both icons, text as props.text, anchor</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="link" href="/" text="Example" /> ← both icons, text as props.text, link</div>

      <br />

      <div><Button iconBefore="arrowRight">Example</Button> ← iconBefore, text as children, button</div>
      <div><Button iconBefore="arrowRight" type="reset">Example</Button> ← iconBefore, text as children, reset</div>
      <div><Button iconBefore="arrowRight" type="submit">Example</Button> ← iconBefore, text as children, submit</div>
      <div><Button iconBefore="arrowRight" type="anchor" href="/">Example</Button> ← iconBefore, text as children, anchor</div>
      <div><Button iconBefore="arrowRight" type="link" href="/">Example</Button> ← iconBefore, text as children, link</div>

      <div><Button iconAfter="arrowLeft">Example</Button> ← iconAfter, text as children, button</div>
      <div><Button iconAfter="arrowLeft" type="reset">Example</Button> ← iconAfter, text as children, reset</div>
      <div><Button iconAfter="arrowLeft" type="submit">Example</Button> ← iconAfter, text as children, submit</div>
      <div><Button iconAfter="arrowLeft" type="anchor" href="/">Example</Button> ← iconAfter, text as children, anchor</div>
      <div><Button iconAfter="arrowLeft" type="link" href="/">Example</Button> ← iconAfter, text as children, link</div>

      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft">Example</Button> ← both icons, text as children, button</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="reset">Example</Button> ← both icons, text as children, reset</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="submit">Example</Button> ← both icons, text as children, submit</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="anchor" href="/">Example</Button> ← both icons, text as children, anchor</div>
      <div><Button iconBefore="arrowRight" iconAfter="arrowLeft" type="link" href="/">Example</Button> ← both icons, text as children, link</div>

      <br />

      <div><Button iconOnly iconBefore="arrowRight" text="Example" /> ← iconOnly, iconBefore, text as props.text, button</div>
      <div><Button iconOnly iconBefore="arrowRight" type="reset" text="Example" /> ← iconOnly, iconBefore, text as props.text, reset</div>
      <div><Button iconOnly iconBefore="arrowRight" type="submit" text="Example" /> ← iconOnly, iconBefore, text as props.text, submit</div>
      <div><Button iconOnly iconBefore="arrowRight" type="anchor" href="/" text="Example" /> ← iconOnly, iconBefore, text as props.text, anchor</div>
      <div><Button iconOnly iconBefore="arrowRight" type="link" href="/" text="Example" /> ← iconOnly, iconBefore, text as props.text, link</div>

      <div><Button iconOnly iconAfter="arrowLeft" text="Example" /> ← iconOnly, iconAfter, text as props.text, button</div>
      <div><Button iconOnly iconAfter="arrowLeft" type="reset" text="Example" /> ← iconOnly, iconAfter, text as props.text, reset</div>
      <div><Button iconOnly iconAfter="arrowLeft" type="submit" text="Example" /> ← iconOnly, iconAfter, text as props.text, submit</div>
      <div><Button iconOnly iconAfter="arrowLeft" type="anchor" href="/" text="Example" /> ← iconOnly, iconAfter, text as props.text, anchor</div>
      <div><Button iconOnly iconAfter="arrowLeft" type="link" href="/" text="Example" /> ← iconOnly, iconAfter, text as props.text, link</div>

      <div><Button iconOnly iconBefore="arrowRight" iconAfter="arrowLeft" text="Example" /> ← iconOnly, both icons, text as props.text, button</div>
      <div><Button iconOnly iconBefore="arrowRight" iconAfter="arrowLeft" type="reset" text="Example" /> ← iconOnly, both icons, text as props.text, reset</div>
      <div><Button iconOnly iconBefore="arrowRight" iconAfter="arrowLeft" type="submit" text="Example" /> ← iconOnly, both icons, text as props.text, submit</div>
      <div><Button iconOnly iconBefore="arrowRight" iconAfter="arrowLeft" type="anchor" href="/" text="Example" /> ← iconOnly, both icons, text as props.text, anchor</div>
      <div><Button iconOnly iconBefore="arrowRight" iconAfter="arrowLeft" type="link" href="/" text="Example" /> ← iconOnly, both icons, text as props.text, link</div>
    </div>
  ))
  .add('mixed', () => (
    <div>
      <div>
        <Button
          round
          padding
          theme="primary"
          iconBefore="arrowRight"
          text="Example"
        /> ← text as props.text, button
      </div>
      <div>
        <Button
          type="anchor"
          round
          padding
          theme="secondary"
          iconAfter="arrowLeft"
          text="Example"
        /> ← text as props.text, anchor
      </div>
      <div>
        <Button
          type="link"
          round
          padding
          theme="tertiary"
          iconBefore="arrowRight"
          iconAfter="arrowLeft"
          text="Example"
        /> ← text as props.text, link
      </div>

      <br />

      <div>
        <Button
          round
          padding
          theme="primary"
          iconBefore="arrowRight"
        >Example</Button> ← text as children, button
      </div>
      <div>
        <Button
          type="anchor"
          round
          padding
          theme="secondary"
          iconAfter="arrowLeft"
        >Example</Button> ← text as children, anchor
      </div>
      <div>
        <Button
          type="link"
          round
          padding
          theme="tertiary"
          iconBefore="arrowRight"
          iconAfter="arrowLeft"
        >Example</Button> ← text as children, link
      </div>

      <br />

      <div>
        <Button
          round
          padding
          theme="primary"
          iconBefore="arrowRight"
          iconOnly
          text="Example"
        /> ← text as props.text, button
      </div>
      <div>
        <Button
          type="anchor"
          round
          padding
          theme="secondary"
          iconAfter="arrowLeft"
          iconOnly
          text="Example"
        /> ← text as props.text, anchor
      </div>
      <div>
        <Button
          type="link"
          round
          padding
          theme="tertiary"
          iconBefore="arrowRight"
          iconAfter="arrowLeft"
          iconOnly
          text="Example"
        /> ← text as props.text, link
      </div>
    </div>
  ));
