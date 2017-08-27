import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components.
import Header from './components/Header';
import Footer from './components/Footer';

// Routes.
import PageHome from '../../pages/PageHome';
import PageAbout from '../../pages/PageAbout';
import PageNoMatch from '../../pages/PageNoMatch';

// Siblings.
import styles from './index.css';

//------------------------------------------------------------------------------

const App = () =>
  <Router>
    <div className={styles.root}>
      <Header className={styles.header} />

      <main className={styles.main} role="main">
        <Switch>
          <Route path="/" exact component={PageHome} />
          <Route path="/about" component={PageAbout} />
          <Route component={PageNoMatch} />
        </Switch>
      </main>

      <Footer className={styles.footer} />
    </div>
  </Router>;

export default App;
