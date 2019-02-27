import { get } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
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
  <FormattedMessage
    id="media.title"
    defaultMessage="Media"
  >
    {(title) => (
      <Block
        className={styles.Root}
        id="media"
        title={title}
      >
        <Slider {...settings} className={styles.Slider}>
          {news.map(({ id, icon, link }, index) => (
            <div className={styles.Item} key={index}>
              <a className={styles.ItemTitle} href={link}>
                <FormattedMessage
                  id={`media.${id}.title`}
                  defaultMessage="Title"
                />
              </a>

              <div className={styles.ItemDescription}>
                <FormattedMessage
                  id={`media.${id}.description`}
                  defaultMessage="Description"
                />
              </div>

              <div className={styles.ItemDate}>
                <FormattedMessage
                  id={`media.${id}.date`}
                  defaultMessage="Date"
                />
              </div>
            </div>
          ))}
        </Slider>
      </Block>
    )}
  </FormattedMessage>
)

const mapStateToProps = ({ views }) => ({
  news: get(views, 'main.media', []),
})

export default connect(mapStateToProps)(MainMedia);
