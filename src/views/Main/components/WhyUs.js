
import React from 'react';

/** Components **/
import Block from 'components/Block';

import styles from './WhyUs.scss';

const MainWhyUs = () => (
  <Block
    className={styles.Root}
    title="Почему мы"
  >
    <div className={styles.Wrapper}>
      <img
        alt="Why us"
        className={styles.ImageDesktop}
        src={require('../assets/why_us/table.svg')}
      />

      <img
        alt="Why us"
        className={styles.ImageMobile}
        src={require('../assets/why_us/table_mob_head.svg')}
      />

      <img
        alt="Why us"
        className={styles.ImageMobile}
        src={require('../assets/why_us/table_mob_body.svg')}
      />
    </div>
  </Block>
)

export default MainWhyUs;
