import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Subscribe.scss';

const PageSubscribe = ({ partners }) => (
  <Block
    className={styles.Root}
    title="Keep in touch with the latest news"
  >
    <form className={styles.Form}>
      <input
        className={styles.Input}
        name="email"
        placeholder="Email address"
      />

      <button className={styles.Submit} type="submit">
        Subscribe
      </button>
    </form>
  </Block>
)

export default PageSubscribe;
