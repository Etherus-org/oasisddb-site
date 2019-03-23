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
      { id: 'features', anchor: true, link: `${process.env.PUBLIC_URL}/#features` },
      { id: 'roadmap', anchor: true, link: `${process.env.PUBLIC_URL}/#roadmap` },
      { id: 'team', link: `${process.env.PUBLIC_URL}/team` },
    ],
  },
  {
    id: 'news',
    items: [
      { id: 'media', anchor: true, link: `${process.env.PUBLIC_URL}/#media` },
      { id: 'blog', external: true, link: 'https://blog.ties.network/' },
    ],
  },
  {
    id: 'docs',
    items: [
      { id: 'whitepaper', external: true, link: 'files.white_paper' },
      { id: 'yellowpaper', external: true, link: 'files.yellow_paper' },
      { id: 'guide', external: true, link: 'files.short_guide' },
    ],
    title: 'Документы',
  },
  { id: 'faq', external: true, link: 'https://kb.ties.network/' },
  { id: 'contacts', link: '/' },
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
