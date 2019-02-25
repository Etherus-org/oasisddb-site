import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './HowItWorks.scss';

const MainHowItWorks = ({ items }) => (
  <Block
    className={styles.Root}
    title="Как это работает"
  >
    <div className={styles.List}>
      {items.map(({ description, icon, title }, index) => (
        <div className={styles.Item} key={index}>
          <div className={styles.ItemIcon}>
            <img
              alt={title}
              src={icon}
            />
          </div>

          <div className={styles.ItemTitle}>
            {title}
          </div>

          <div className={styles.ItemDescription}>
            {description}
          </div>
        </div>
      ))}
    </div>

    <div className={styles.Actions}>
      <a className={styles.Action} href="/">
        Руководство
      </a>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  items: get(views, 'main.howItWorks', []),
})

export default connect(mapStateToProps)(MainHowItWorks);
