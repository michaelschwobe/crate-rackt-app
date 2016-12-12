import React from 'react';

// Utils.
import { refresh } from '../../utils/';

// Components.
import Button from '../../components/Button';

//--------------------------------------------------------------------------------------------------

const About = () => (
  <div>
    <div>About</div>
    <p>
      <Button round padding theme="primary" iconBefore="refresh" text="Refresh" onClick={refresh} />
    </p>
  </div>
);

export default About;
