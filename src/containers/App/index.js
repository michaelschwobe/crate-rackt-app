import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

// Utilities.
// import { xxx } from '../../utils/';

// Components.
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Routes.
import Home from '../../routes/Home';
import About from '../../routes/About';
import NoMatch from '../../routes/NoMatch';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const App = () => (
  <BrowserRouter>

    <div className={styles.root}>

      <Header className={styles.header} />

      <main className={styles.main} role="main">
        <Match pattern="/" exactly component={Home} />
        <Match pattern="/about" component={About} />
        <Miss component={NoMatch} />
      </main>

      <Footer className={styles.footer} />

    </div>

  </BrowserRouter>
);

export default App;
