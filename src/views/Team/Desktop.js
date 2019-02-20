import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';
import Page, { COLOR } from 'components/Page';

import Mate from './components/Mate';

import styles from './Desktop.scss';

const Team = ({ team }) => (
  <Page
    className={styles.Root}
    color={COLOR.DARK}
  >
    <Block title="Our Team">
      {team.map((mate, index) => <Mate {...mate} key={index} />)}
    </Block>

    <Block title="Advisors">
      <div>123</div>
    </Block>
  </Page>
)

const mapStateToProps = ({ views }) => get(views, 'team', {})

export default connect(mapStateToProps)(Team);
