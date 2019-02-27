import React from 'react';
import { FormattedMessage } from 'react-intl';

/** Components **/
import Block from 'components/Block';

import styles from './WhyUs.scss';

const MainWhyUs = () => (
  <FormattedMessage
    id="why_us.title"
    defaultMessage="Why us"
  >
    {(title) => (
      <Block
        className={styles.Root}
        title={title}
      >
        <div className={styles.Wrapper}>
          <FormattedMessage id="why_us.table">
            {(src) => (
              <img
                alt={title}
                className={styles.ImageDesktop}
                src={src}
              />
            )}
          </FormattedMessage>

          <FormattedMessage id="why_us.mob_head">
            {(src) => (
              <img
                alt={title}
                className={styles.ImageMobile}
                src={src}
              />
            )}
          </FormattedMessage>

          <FormattedMessage id="why_us.mob_body">
            {(src) => (
              <img
                alt={title}
                className={styles.ImageMobile}
                src={src}
              />
            )}
          </FormattedMessage>
        </div>
      </Block>
    )}
  </FormattedMessage>
)

export default MainWhyUs;
