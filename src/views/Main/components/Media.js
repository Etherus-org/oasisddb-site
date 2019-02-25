import { get } from 'lodash';
import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

/** Components **/
import Block from 'components/Block';

import styles from './Media.scss';

const settings = {
  draggable: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        appendDots: dots => <ul className={styles.SliderDots}>{dots}</ul>,
        arrows: false,
        dots: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
};

const MainMedia = ({ news }) => (
  <Block
    className={styles.Root}
    id="media"
    title="СМИ пишут о нас"
  >
    <Slider {...settings} className={styles.Slider}>
      {news.map(({ date, description, icon, link, title }, index) => (
        <div className={styles.Item} key={index}>
          <a className={styles.ItemTitle} href={link}>
            {title}
          </a>

          <div className={styles.ItemDescription}>
            {description}
          </div>

          <div className={styles.ItemDate}>
            {date}
          </div>
        </div>
      ))}
    </Slider>
  </Block>
)

const mapStateToProps = ({ views }) => ({
  news: get(views, 'main.media', []),
})

export default connect(mapStateToProps)(MainMedia);
