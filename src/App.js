import { keys } from 'lodash';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// i18n
import { getMessages } from 'i18n';

// Services
import { getLocale } from 'services/env';

// Views
import Main from 'views/Main';
import Team from 'views/Team';

// Styles
import styles from './App.scss';

const importMessages = getMessages('ru');
const json = [];

keys(importMessages).forEach((key) => {
  json.push({
    id: key,
    value: importMessages[key],
  })
});

console.log(JSON.stringify(json));

const App = ({
  currentLocale,
}) => (
  <IntlProvider locale="en" messages={getMessages(currentLocale)}>
    <div className={styles.Root}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
      <Route path={`${process.env.PUBLIC_URL}/team`} component={Team} />
    </div>
  </IntlProvider>
)

const mapStateToProps = (state) => ({
  currentLocale: getLocale(state),
});

export default connect(mapStateToProps)(App);
