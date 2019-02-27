import { get } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Cases.scss';

const MainCases = ({ cases }) => (
  <FormattedMessage
    id="cases.title"
    defaultMessage="Application cases"
  >
    {(title) => (
      <Block
        className={styles.Root}
        title={title}
      >
        <div className={styles.List}>
          {cases.map(({ id, icon }, index) => (
            <div className={styles.Item} key={index}>
              <img
                alt={id}
                className={styles.ItemIcon}
                src={icon}
              />

              <div className={styles.ItemTitle}>
                <FormattedMessage
                  id={`cases.${id}`}
                  defaultMessage="Title"
                />
              </div>
            </div>
          ))}
        </div>
      </Block>
    )}
  </FormattedMessage>
)

const mapStateToProps = ({ views }) => ({
  cases: get(views, 'main.cases', []),
})

export default connect(mapStateToProps)(MainCases);
