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
            alt="Ties.DB"
            className={styles.Logo}
            src={require('../assets/logo_dark.svg')}
          />
        </a>

        <div className={styles.CompanyInfo}>
          Ties.BV. Limited liability company. KvK-nummer: 69555176
        </div>
      </div>

      <div className={styles.Social}>
        Got questions? Ask&nbsp;us&nbsp;on&nbsp;our&nbsp;channel

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
          Private policy
        </a>

        <a className={styles.Link} href="/">
          Terms and conditions
        </a>
      </div>

      <div className={styles.CompanyInfoMobile}>
        Ties.BV. Limited liability company.
        <br />
        KvK-nummer: 69555176
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  social: get(views, 'main.social', []),
})

export default connect(mapStateToProps)(PageCopyright);
