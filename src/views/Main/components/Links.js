import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import * as React from "react";

/** Components **/
import Block from "components/Block";

// Style
import style from "./Links.scss";

const DATA = [
  {
    icon: "Youtube",
    title: "Большое интервью о проекте Oasis",
    url: "https://youtu.be/XZtVJiHo-1g"
  },
  {
    icon: "Youtube",
    title: "Демонстрация работы базы данных Oasis",
    url: "https://youtu.be/OZVlpzFfLEM"
  },
  {
    icon: "Youtube",
    title: "База данных глазами команды разработчиков",
    url: "https://youtu.be/ojCFwe8YhI0"
  },
  {
    icon: "Pdf",
    title: "Презентация Oasis"
  },
  {
    icon: "Pdf",
    title: "Onepage Oasis"
  }
];

const MainLinks = () => (
  <Block className={style.Root}>
    <div className={style.Wrapper}>
      {DATA.map(({ icon, title, url }, index) => (
        <a className={style.Item} href={url} target="_blank">
          <i className={classNames(style.Icon, style[`IconVariant${icon}`])} />
          <FormattedMessage id={`links.${index}.title`} />
        </a>
      ))}
    </div>
  </Block>
);

export default MainLinks;
