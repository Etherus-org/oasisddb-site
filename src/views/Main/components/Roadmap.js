import classNames from 'classnames';
import { get } from 'lodash';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Roadmap.scss';

const MainRoadmap = ({ points }) => (
  <Block
    className={styles.Root}
    id="roadmap"
    title="Roadmap"
  >
    <div className={styles.List}>
      {points.map(({ description, from, title, to }, index) => {
        const className = classNames(styles.Item, {
          [styles.ItemTypeCurrent]: moment().isBetween(from, to),
          [styles.ItemTypePast]: moment().isAfter(to),
        });

        return (
          <div className={className} key={index}>
            <div className={styles.ItemPoint} />

            <div className={styles.ItemContent}>
              <div className={styles.ItemTitle}>
                {title}
              </div>

              <div className={styles.ItemDescription}>
                {description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  points: get(views, 'main.roadmap', []),
})

export default connect(mapStateToProps)(MainRoadmap);
