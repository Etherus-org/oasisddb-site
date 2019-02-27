import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';
import Menu, { VARIANT } from './Menu';

import styles from './Footer.scss';

const PageFooter = ({ env: { isMobile }, menu }) => (
  <Block className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Menu}>
        <Menu
          menu={menu}
          variant={isMobile
            ? VARIANT.MOBILE_FOOTER
            : VARIANT.DESKTOP_FOOTER
          }
        />
      </div>

      <div className={styles.Right}>
        <FormattedMessage
          id="footer.video"
          defaultMessage="Watch the Video"
        />

        <div className={styles.Video} />
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ services }) => ({
  env: services.env,
})

export default connect(mapStateToProps)(PageFooter);
