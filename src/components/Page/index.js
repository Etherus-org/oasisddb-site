import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';

/** Views **/
import Desktop from './Desktop';
import Mobile from './Mobile';

const COLOR = {
  DARK: 'Dark',
}

const menu = [
  {
    id: 'about',
    items: [
      { anchor: true, link: `${process.env.PUBLIC_URL}/#features`, title: 'Возможности' },
      { anchor: true, link: `${process.env.PUBLIC_URL}/#roadmap`, title: 'Дорожная карта' },
      { link: `${process.env.PUBLIC_URL}/team`, title: 'Команда' },
    ],
    title: 'О нас',
  },
  {
    id: 'news',
    items: [
      { anchor: true, link: `${process.env.PUBLIC_URL}/#media`, title: 'СМИ' },
      { external: true, link: 'https://blog.ties.network/', title: 'Блог' },
    ],
    title: 'Новости',
  },
  {
    id: 'docs',
    items: [
      { link: '/', title: 'Обзор технологии (White Paper)' },
      { external: true, link: 'https://docs.google.com/document/d/1UwaaUgunnrFpL6jetA_DdNLQsbbqBx1HLcln07kLrUw', title: 'Техническое описание (Yellow Paper)' },
      { external: true, link: 'https://cdn.ties.network/short-guide-eng.pdf', title: 'Руководство' },
    ],
    title: 'Документы',
  },
  { external: true, link: 'https://kb.ties.network/', title: 'FAQ' },
  { link: '/', title: 'Контакты' },
];

const Page = ({
  env: { isMobile },
  ...props,
}) => (
  <div>
    {createElement(isMobile ? Mobile : Desktop, {
      ...props,
      isMobile,
      menu,
    })}
  </div>
)

const mapStateToProps = ({ services }) => ({
  env: services.env,
});

export default compose(
  connect(mapStateToProps),
  withStateHandlers(
    props => ({ menuIsOpened: false }),
    {
      handleMenuToggle: state => () => ({ menuIsOpened: !state.menuIsOpened }),
    }
  )
)(Page);
export { COLOR };
