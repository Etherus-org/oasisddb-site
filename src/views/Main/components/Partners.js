import { get } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Partners.scss';

const MainPartners = ({ partners }) => (
  <FormattedMessage
    id="partners.title"
    defaultMessage="Partners"
  >
    {(title) => (
      <Block
        className={styles.Root}
        title={title}
      >
        <div className={styles.List}>
          {partners.map(({ link, src, title }, index) => (
            <a
              className={styles.Item}
              href={link}
              key={index}
              target="_blank"
            >
              <img
                alt={title}
                className={styles.ItemImage}
                src={src}
              />
            </a>
          ))}
        </div>
      </Block>
    )}
  </FormattedMessage>
)

const mapStateToProps = ({ views }) => ({
  partners: get(views, 'main.partners', []),
})

export default connect(mapStateToProps)(MainPartners);
