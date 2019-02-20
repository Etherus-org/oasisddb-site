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
      { anchor: true, link: `${process.env.PUBLIC_URL}/#features`, title: 'Features' },
      { anchor: true, link: `${process.env.PUBLIC_URL}/#roadmap`, title: 'Roadmap' },
      { link: `${process.env.PUBLIC_URL}/team`, title: 'Team' },
    ],
    title: 'About',
  },
  {
    id: 'news',
    items: [
      { anchor: true, link: `${process.env.PUBLIC_URL}/#media`, title: 'Media' },
      { external: true, link: 'https://blog.ties.network/', title: 'Blog' },
    ],
    title: 'News',
  },
  {
    id: 'docs',
    items: [
      { link: '/', title: 'White paper' },
      { external: true, link: 'https://docs.google.com/document/d/1UwaaUgunnrFpL6jetA_DdNLQsbbqBx1HLcln07kLrUw', title: 'Yellow paper' },
      { external: true, link: 'https://cdn.ties.network/short-guide-eng.pdf', title: 'Short Guide' },
    ],
    title: 'Docs',
  },
  { external: true, link: 'https://kb.ties.network/', title: 'FAQ' },
  { link: '/', title: 'Contact' },
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
