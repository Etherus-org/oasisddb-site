import classNames from "classnames";
import { get } from "lodash";
import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

/** Components **/
import Block from "components/Block";

import styles from "./HowItWorks.scss";

const MainHowItWorks = ({ items }) => (
  <FormattedMessage id="how_it_works.title" defaultMessage="How it works">
    {title => (
      <Block className={styles.Root} title={title}>
        <div className={styles.List}>
          {items.map(({ id, icon }, index) => (
            <div className={styles.Item} key={index}>
              <div className={styles.ItemIcon}>
                <img alt={id} src={icon} />
              </div>

              <div className={styles.ItemTitle}>
                <FormattedMessage id={`how_it_works.${id}.title`} defaultMessage="Title" />
              </div>

              <div className={styles.ItemDescription}>
                <FormattedMessage
                  id={`how_it_works.${id}.description`}
                  defaultMessage="Description"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.Actions}>
          <FormattedMessage id="files.yellow_paper" defaultMessage="/files/yellow-paper-ru.pdf">
            {link => (
              <a className={styles.Action} href={link}>
                <FormattedMessage id="common.yellowpaper" defaultMessage="Yellow paper" />
              </a>
            )}
          </FormattedMessage>

          <FormattedMessage id="files.short_guide" defaultMessage="/files/short-guide-ru.pdf">
            {link => (
              <a className={classNames(styles.Action, styles.ActionRed)} href={link}>
                <FormattedMessage id="common.guide" defaultMessage="Short guide" />
              </a>
            )}
          </FormattedMessage>

          <FormattedMessage id="files.white_paper" defaultMessage="/files/white-paper-ru.pdf">
            {link => (
              <a className={styles.Action} href={link}>
                <FormattedMessage id="common.whitepaper" defaultMessage="White paper" />
              </a>
            )}
          </FormattedMessage>
        </div>
      </Block>
    )}
  </FormattedMessage>
);

const mapStateToProps = ({ views }) => ({
  items: get(views, "main.howItWorks", [])
});

export default connect(mapStateToProps)(MainHowItWorks);
