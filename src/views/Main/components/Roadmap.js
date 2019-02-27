import classNames from 'classnames';
import { get } from 'lodash';
import moment from 'moment';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Roadmap.scss';

const MainRoadmap = ({ points }) => (
  <FormattedMessage
    id="roadmap.title"
    defaultMessage="Roadmap"
  >
    {(title) => (
      <Block
        className={styles.Root}
        id="roadmap"
        title={title}
      >
        <div className={styles.List}>
          {points.map(({ id, from, to }, index) => {
            const className = classNames(styles.Item, {
              [styles.ItemTypeCurrent]: moment().isBetween(from, to),
              [styles.ItemTypePast]: moment().isAfter(to),
            });

            return (
              <div className={className} key={index}>
                <div className={styles.ItemPoint} />

                <div className={styles.ItemContent}>
                  <div className={styles.ItemTitle}>
                    <FormattedMessage
                      id={`roadmap.${id}.title`}
                      defaultMessage="Title"
                    />
                  </div>

                  <div className={styles.ItemDescription}>
                    <FormattedMessage
                      id={`roadmap.${id}.description`}
                      defaultMessage="Description"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Block>
    )}
  </FormattedMessage>
)

const mapStateToProps = ({ views }) => ({
  points: get(views, 'main.roadmap', []),
})

export default connect(mapStateToProps)(MainRoadmap);
