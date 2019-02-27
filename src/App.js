import React from 'react';
import  { IntlProvider } from 'react-intl';
import { Route } from 'react-router-dom';

// i18n
import ru from './i18n/ru';

/** Views **/
import Main from 'views/Main';
import Team from 'views/Team';

import styles from './App.scss';

const App = () => (
  <IntlProvider locale="en" messages={ru}>
    <div className={styles.Root}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
      <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
    </div>
  </IntlProvider>
)

export default App;
