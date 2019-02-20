import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './WhyNeed.scss';

const MainWhyNeed = ({ items }) => (
  <Block
    className={styles.Root}
    title="Why you really need OasisDDB"
  >
    <div className={styles.List}>
      {items.map(({ description, icon, link, preface, title }, index) => (
        <div className={styles.Item} key={index}>
          <div className={styles.ItemLeft}>
            <img
              alt={title}
              className={styles.ItemIcon}
              src={icon}
            />
          </div>

          <div className={styles.ItemRight}>
            <div className={styles.ItemTitle}>
              {title}
            </div>

            <div className={styles.ItemPreface}>
              {preface}
            </div>

            <div className={styles.ItemDescription}>
              {description}
            </div>

            <div className={styles.ItemActions}>
              <a className={styles.ItemLink} href={link.href}>
                {link.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  items: get(views, 'main.whyNeed', []),
})

export default connect(mapStateToProps)(MainWhyNeed);
