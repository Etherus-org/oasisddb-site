import classNames from "classnames";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

/** Components **/
import Block from "components/Block";

import styles from "./Header.scss";

const MainHeader = ({ menuIsOpened }) => {
  const className = classNames(styles.Root, {
    [styles.RootWithMenu]: !!menuIsOpened
  });

  return (
    <Block className={className}>
      <div className={styles.Cover}>
        <video autoPlay className={styles.CoverVideo} loop={true} muted playsInline>
          <source
            src="https://etherus.org/img/077402318-central-hong-kong-26-june-2017.mov"
            type="video/mp4"
          />
        </video>
      </div>

      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          <FormattedMessage
            id="header.title"
            defaultMessage="Discover\nboundless opportunities\nwith Ties.DB"
          />
        </div>

        <div className={styles.Slogan}>
          <FormattedMessage
            id="header.slogan"
            defaultMessage="A public, distributed and decentralized database\nwith one common thread: trust."
          />
        </div>

        <form className={styles.Form}>
          <Link className={styles.Button} to="/faq">
            <FormattedMessage id="faq.title" defaultMessage="Что такое Оазис?" />
          </Link>

          <a className={styles.Button} download href="/files/Oasis-0.1.0-mac.zip">
            <FormattedMessage id="subscribe.access" defaultMessage="Get Early Access" />
          </a>
        </form>
      </div>
    </Block>
  );
};

export default MainHeader;
