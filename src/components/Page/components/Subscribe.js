import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Subscribe.scss';

const PageSubscribe = ({ partners }) => (
  <Block
    className={styles.Root}
    title="Будьте в курсе последних новостей"
  >
    <form className={styles.Form}>
      <input
        className={styles.Input}
        name="email"
        placeholder="Электронная почта"
      />

      <button className={styles.Submit} type="submit">
        Подписаться
      </button>
    </form>
  </Block>
)

export default PageSubscribe;
