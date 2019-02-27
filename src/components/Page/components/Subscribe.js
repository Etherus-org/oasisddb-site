import React from 'react';
import { FormattedMessage } from 'react-intl';

/** Components **/
import Block from 'components/Block';

import styles from './Subscribe.scss';

const PageSubscribe = () => (
  <FormattedMessage
    id="subscribe.title"
    defaultMessage="Keep in touch with the latest news"
  >
    {(title) => (
      <Block
        className={styles.Root}
        title={title}
      >
        <form className={styles.Form}>
          <FormattedMessage
            id="subscribe.email"
            defaultMessage="Email address"
          >
            {(placeholder) => (
              <input
                className={styles.Input}
                name="email"
                placeholder={placeholder}
              />
            )}
          </FormattedMessage>

          <button className={styles.Submit} type="submit">
            <FormattedMessage
              id="subscribe.button"
              defaultMessage="Subscribe"
            />
          </button>
        </form>
      </Block>
    )}
  </FormattedMessage>
)

export default PageSubscribe;
