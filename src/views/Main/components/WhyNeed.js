import { get } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './WhyNeed.scss';

const MainWhyNeed = ({ items }) => (
  <FormattedMessage
    id="why_need.title"
    defaultMessage="Why you really need Ties.DB"
  >
    {(title) => (
      <Block
        className={styles.Root}
        title={title}
      >
        <div className={styles.List}>
          {items.map(({ id, icon, href }, index) => (
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
                  <FormattedMessage
                    id={`why_need.${id}.title`}
                    defaultMessage="Title"
                  />
                </div>
    
                <div className={styles.ItemPreface}>
                  <FormattedMessage
                    id={`why_need.${id}.preface`}
                    defaultMessage="Pre-face"
                  />
                </div>
    
                <div className={styles.ItemDescription}>
                  <FormattedMessage
                    id={`why_need.${id}.description`}
                    defaultMessage="Description"
                  />
                </div>
    
                <div className={styles.ItemActions}>
                  <a className={styles.ItemLink} href={href}>
                    <FormattedMessage
                      id={`why_need.${id}.link`}
                      defaultMessage="Link"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Block>
    )}
  </FormattedMessage>
)

const mapStateToProps = ({ views }) => ({
  items: get(views, 'main.whyNeed', []),
})

export default connect(mapStateToProps)(MainWhyNeed);
