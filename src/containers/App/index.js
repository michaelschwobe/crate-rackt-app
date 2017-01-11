import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

// Components.
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Routes.
import PageHome from '../PageHome';
import PageAbout from '../PageAbout';
import PageNoMatch from '../PageNoMatch';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const App = () => (
  <BrowserRouter>

    <div className={styles.root}>

      <Header className={styles.header} />

      <main className={styles.main} role="main">
        <Match pattern="/" exactly component={PageHome} />
        <Match pattern="/about" component={PageAbout} />
        <Miss component={PageNoMatch} />
      </main>

      <Footer className={styles.footer} />

    </div>

  </BrowserRouter>
);

export default App;
