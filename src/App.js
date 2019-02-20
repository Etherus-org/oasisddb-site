import React from 'react';
import { Route } from 'react-router-dom';

/** Views **/
import Main from 'views/Main';
import Team from 'views/Team';

import styles from './App.scss';

const App = () => (
  <div className={styles.Root}>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
    <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
  </div>
)

export default App;
