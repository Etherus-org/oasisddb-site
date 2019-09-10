import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';
import Menu, { VARIANT } from './Menu';

import styles from './Footer.scss';
import style from "../../../views/Main/components/Events.scss";

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
        <FormattedMessage id="footer.video.id" defaultMessage={null}>
          {(id) => id !== 'footer.video.id' && (
            <div className={styles.Video}>
              <a href={`https://youtu.be/${id}`} target="_blank" rel="noopener noreferrer">
                <img
                  alt="Oasis promo"
                  className={style.Preview}
                  src={`http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
                />
              </a>
            </div>
          )}
        </FormattedMessage>
      </div>
    </div>
  </Block>
)

const mapStateToProps = ({ services }) => ({
  env: services.env,
})

export default connect(mapStateToProps)(PageFooter);
