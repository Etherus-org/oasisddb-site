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
          Discover
          <br />
          boundless opportunities
          <br />
          with Ties.DB
        </div>

        <div className={styles.Slogan}>
          A&nbsp;public, distributed and&nbsp;decentralized&nbsp;database
          <br />
          with one common thread: trust.
        </div>

        <form className={styles.Form}>
          <input
            className={styles.Input}
            name="email"
            placeholder="Email address"
          />

          <button
            className={styles.Button}
            type="submit"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </Block>
  );
}

export default MainHeader;
