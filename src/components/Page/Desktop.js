import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';

/** Components **/
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Menu, { VARIANT } from './components/Menu';
import Subscribe from './components/Subscribe';

import { COLOR } from 'components/Page';

import styles from './Desktop.scss';

const Page = ({ children, color, menu }) => {
  const className = classNames(styles.Root, {
    [styles.RootColorDark]: color === COLOR.DARK
  });

  return (
    <div className={className}>
      <div className={styles.Header}>
        <div className={styles.HeaderLeft}>
          <a href="/">
            <img
              alt="OasisDDB"
              className={styles.HeaderLogo}
              src={color === COLOR.DARK ? require('./assets/logo_dark.svg') : require('./assets/logo.svg')}
            />
          </a>


          <div className={styles.HeaderRate}>
            <strong>1 ODDB</strong> = 0.25$
          </div>
        </div>

        <div className={styles.HeaderCenter}>
          <Menu
            color={color}
            menu={menu}
            variant={VARIANT.DESKTOP}
          />
        </div>

        <div className={styles.Rent}>
          <a className={styles.RentAction} href="/">
            <FormattedMessage
              id="common.rent"
              defaultMessage="Rent your drive"
            />

            <div className={styles.RentTooltip}>
              <FormattedMessage
                id="common.rent.tooltip"
                defaultMessage="Earn money with OasisDDB"
              />
            </div>
          </a>

          <div className={styles.Language}>
            <div className={styles.LanguageItem}>
              RU
            </div>

            <div className={styles.LanguageItem}>
              EN
            </div>

            <div className={styles.LanguageItem}>
              ES
            </div>

            <div className={styles.LanguageItem}>
              CN
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Container}>
        {children}
      </div>

      <div className={styles.Footer}>
        <Subscribe />
        <Footer menu={menu} />
        <Copyright />
      </div>
    </div>
  );
}

export default Page;
