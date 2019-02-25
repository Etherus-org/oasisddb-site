import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Copyright.scss';

const PageCopyright = ({ social }) => (
  <Block className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Company}>
        <a href="/">
          <img
            alt="OasisDDB"
            className={styles.Logo}
            src={require('../assets/logo_dark.svg')}
          />
        </a>

        <div className={styles.CompanyInfo}>
          ООО "OasisDDB"
        </div>
      </div>

      <div className={styles.Social}>
        Остались вопросы? Спросите&nbsp;нас&nbsp;в&nbsp;наших&nbsp;каналах

        <div className={styles.SocialList}>
          {social.map(({ icon, id, link, title }, index) => {
            const className = classNames(
              styles.SocialLink,
              styles[`SocialLinkType${id}`]
            );

            return (
              <a
                className={className}
                href={link}
                key={index}
                target="_blank"
              />
            );
          })}
        </div>
      </div>

      <div className={styles.Links}>
        <a className={styles.Link} href="/">
          Политика конфиденциальности
        </a>

        <a className={styles.Link} href="/">
          Условия и положения
        </a>
      </div>

      <div className={styles.CompanyInfoMobile}>
        ООО "OasisDDB"
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  social: get(views, 'main.social', []),
})

export default connect(mapStateToProps)(PageCopyright);
