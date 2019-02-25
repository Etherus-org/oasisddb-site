import classNames from 'classnames';
import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './Header.scss';

const MainHeader = ({
  menuIsOpened,
}) => {
  const className = classNames(styles.Root, {
    [styles.RootWithMenu]: !!menuIsOpened,
  });

  return (
    <Block className={className}>
      <div className={styles.Cover}>
        <video
          autoPlay={true}
          className={styles.CoverVideo}
          loop={true}
        >
          <source src={require('../assets/header/fromRussiaWithLove.mp4')} />
        </video>
      </div>

      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          Открой
          <br />
          безграничные возможности
          <br />
          с OasisDDB
        </div>

        <div className={styles.Slogan}>
          Публичная, распределённая и&nbsp;децентрализованная&nbsp;база данных
          <br />
          с одной общей чертой: доверие.
        </div>

        <form className={styles.Form}>
          <input
            className={styles.Input}
            name="email"
            placeholder="Электронная почта"
          />

          <button
            className={styles.Button}
            type="submit"
          >
            Получить доступ
          </button>
        </form>
      </div>
    </Block>
  );
}

export default MainHeader;
