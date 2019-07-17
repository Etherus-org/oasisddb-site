import { FormattedMessage } from "react-intl";
import * as React from "react";

/** Components **/
import Block from "components/Block";

// Style
import style from "./Events.scss";

const DATA = [
  {
    id: "NQ4bqk2OgRc",
    preview:
      "https://i.ytimg.com/vi/NQ4bqk2OgRc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWo6tXMHLzbVQsufxwnENxn_xDcw",
    title: "КАЗАНЬ, 9 августа: Что такое Оазис?"
  },
  {
    id: "92jaxAXm3oo",
    preview:
      "https://i.ytimg.com/vi/92jaxAXm3oo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLACluNcH3FYpsYq4b5BzLZK_oqWfw",
    title: "Подписание договора о сотрудничестве между Оазис и KloowayBet"
  }
];

const MainEvents = () => (
  <FormattedMessage id="events.title" defaultMessage="Event">
    {title => (
      <Block className={style.Root} id="events" title={title}>
        <div className={style.Wrapper}>
          <a
            className={style.Playlist}
            href="https://www.youtube.com/playlist?list=PLGLl_Q2H4dLuLrp9hDCK-xys0LURzd9Nf"
          >
            <FormattedMessage id="events.more" defaultMessage="All videos" />
          </a>

          <div className={style.Container}>
            {DATA.map(({ id, preview, title }, index) => (
              <a
                className={style.Item}
                href={`https://www.youtube.com/watch?v=${id}&list=PLGLl_Q2H4dLuLrp9hDCK-xys0LURzd9Nf`}
                target="_blank"
              >
                <img alt={title} className={style.Preview} src={preview} />
                <div className={style.Title}>{title}</div>
              </a>
            ))}
          </div>
        </div>
      </Block>
    )}
  </FormattedMessage>
);

export default MainEvents;
