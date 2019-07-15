import { get } from "lodash";
import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

/** Components **/
import Block from "components/Block";
import Page, { COLOR } from "components/Page";

import Mate from "./components/Mate";

import styles from "./Desktop.scss";

const Team = ({ team }) => (
  <Page className={styles.Root} color={COLOR.DARK}>
    <FormattedMessage id="team.title" defaultMessage="Our Team">
      {title => (
        <Block title={title}>
          {team.map((mate, index) => (
            <Mate {...mate} key={index} />
          ))}
        </Block>
      )}
    </FormattedMessage>
    {/* 
    <FormattedMessage
      id="advisors.title"
      defaultMessage="Advisors"
    >
      {(title) => (
        <Block title={title}>
          <div>123</div>
        </Block>
      )}
    </FormattedMessage> */}
  </Page>
);

const mapStateToProps = ({ views }) => get(views, "team", {});

export default connect(mapStateToProps)(Team);
