import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Features.scss';

const MainFeatures = ({ features }) => (
  <Block
    className={styles.Root}
    id="features"
    title="Key features of&nbsp;Ties.DB"
  >
    <div className={styles.Features}>
      {features.map(({ description, icon, title }, index) => (
        <div className={styles.Feature} key={index}>
          <img
            alt={title}
            className={styles.FeatureIcon}
            src={icon}
          />

          <div className={styles.FeatureContainer}>
            <div className={styles.FeatureTitle}>
              {title}
            </div>

            <div className={styles.FeatureDescription}>
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className={styles.More}>
      <a className={styles.MoreLink} href="/">
        See all features
      </a>
    </div>

    <div className={styles.Actions}>
      <a className={styles.Action} href="/">
        Yellow paper
      </a>

      <a className={classNames(styles.Action, styles.ActionRed)} href="/">
        Short guide
      </a>

      <a className={styles.Action} href="/">
        White paper
      </a>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  features: get(views, 'main.features', []),
})

export default connect(mapStateToProps)(MainFeatures);
