import React, { createElement } from "react";
import { connect } from "react-redux";
import { compose, withStateHandlers } from "recompose";

/** Views **/
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const COLOR = {
  DARK: "Dark"
};

const menu = [
  {
    id: "about",
    items: [
      { id: "features", anchor: true, link: `${process.env.PUBLIC_URL}/#features` },
      { id: "team", link: `${process.env.PUBLIC_URL}/team` }
    ]
  },
  {
    id: "news",
    items: [
      { id: "events", anchor: true, link: `${process.env.PUBLIC_URL}/#events` },
      { id: "media", anchor: true, link: `${process.env.PUBLIC_URL}/#media` }
      // { id: "blog", external: true, link: "https://zen.yandex.ru/id/5d2a4402fbe6e700ac0d528d" }
    ]
  },
  {
    id: "docs",
    items: [
      { id: "whitepaper", external: true, link: "files.white_paper" },
      { id: "yellowpaper", external: true, link: "files.yellow_paper" },
      { id: "guide", external: true, link: "files.short_guide" }
    ],
    title: "Документы"
  },
  { id: "faq", link: `${process.env.PUBLIC_URL}/faq` },
  { id: "blog", external: true, link: "https://zen.yandex.ru/id/5d2a4402fbe6e700ac0d528d" }
];

const Page = ({ env: { isMobile }, ...props }) => (
  <div>
    {createElement(isMobile ? Mobile : Desktop, {
      ...props,
      isMobile,
      menu
    })}
  </div>
);

const mapStateToProps = ({ services }) => ({
  env: services.env
});

export default compose(
  connect(mapStateToProps),
  withStateHandlers(props => ({ menuIsOpened: false }), {
    handleMenuToggle: state => () => ({ menuIsOpened: !state.menuIsOpened })
  })
)(Page);
export { COLOR };
