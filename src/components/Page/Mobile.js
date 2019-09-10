import classNames from "classnames";
import React, { Children, cloneElement } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

/** Components **/
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Menu, { VARIANT } from "./components/Menu";
import Subscribe from "./components/Subscribe";

// i18n
import { getLocales } from "i18n";

// Services
import { getLocale, setLocale } from "services/env";

import styles from "./Mobile.scss";

const Page = ({
  children,
  currentLocale,
  handleChangeLocale,
  handleMenuToggle,
  menu,
  menuIsOpened
}) => {
  const className = classNames(styles.Root, {
    [styles.RootWithMenu]: menuIsOpened
  });

  return (
    <div className={className}>
      <div className={styles.Header}>
        <div className={styles.Rate}>
          <strong>1 ODDB</strong>&nbsp;=&nbsp;0.25$
        </div>

        <div className={styles.HeaderContainer}>
          <img alt="OasisDDB" className={styles.HeaderLogo} src={require("./assets/logo.svg")} />

          <div className={styles.Language}>
            {getLocales().map(locale => {
              const itemClassNames = classNames(styles.LanguageItem, {
                [styles.LanguageItemIsSelected]: locale === currentLocale
              });

              return (
                <div
                  className={itemClassNames}
                  key={locale}
                  onClick={() => handleChangeLocale(locale)}
                >
                  {locale}
                </div>
              );
            })}
          </div>

          <button className={styles.HeaderBurger} onClick={handleMenuToggle} />
        </div>

        <div className={styles.HeaderDropdown}>
          <div className={styles.Menu}>
            <Menu menu={menu} variant={VARIANT.MOBILE} />
          </div>

          <div className={styles.Rent}>
            <a className={styles.RentAction} href="/">
              <FormattedMessage id="common.rent" defaultMessage="Rent your drive" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.Container}>
        {Children.map(children, child => child && cloneElement(child, { menuIsOpened }))}

        <Footer menu={menu} />
        <Copyright />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentLocale: getLocale(state)
});

export default compose(
  connect(
    mapStateToProps,
    { setLocale }
  ),
  withHandlers({
    handleChangeLocale: ({ setLocale }) => locale => setLocale(locale)
  })
)(Page);
