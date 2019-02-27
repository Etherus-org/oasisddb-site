import classNames from 'classnames';
import { get } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage
            id="copyright.title"
            defaultMessage="Ties.BV. Limited liability company."
          />
        </div>
      </div>

      <div className={styles.Social}>
        <FormattedMessage
          id="copyright.questions"
          defaultMessage="Got questions? Ask us on our channel"
        />

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
          <FormattedMessage
            id="copyright.policy"
            defaultMessage="Private policy"
          />
        </a>

        <a className={styles.Link} href="/">
          <FormattedMessage
            id="copyright.terms"
            defaultMessage="Terms and conditions"
          />
        </a>
      </div>

      <div className={styles.CompanyInfoMobile}>
        <FormattedMessage
          id="copyright.title"
          defaultMessage="Ties.BV. Limited liability company."
        />
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  social: get(views, 'main.social', []),
})

export default connect(mapStateToProps)(PageCopyright);
