import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Partners.scss';

const MainPartners = ({ partners }) => (
  <Block
    className={styles.Root}
    title="Партнеры"
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
)

const mapStateToProps = ({ views }) => ({
  partners: get(views, 'main.partners', []),
})

export default connect(mapStateToProps)(MainPartners);
