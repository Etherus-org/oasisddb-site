import { get } from "lodash";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import Collapse, { Panel } from "rc-collapse";

/** Components **/
import Block from "components/Block";
import Page, { COLOR } from "components/Page";

// Style
import style from "./Faq.scss";

require("rc-collapse/assets/index.css");

const DATA = [
  {
    title: "Что такое Оазис и зачем он нужен?",
    url: "https://www.youtube.com/embed/DsH7W3UCk80"
  },
  {
    title: "Какие типы документов можно хранить в системе Оазис?",
    url: "https://www.youtube.com/embed/Y88o72hgtVs"
  },
  {
    title: "Почему информацию важно хранить в сети Оазис?",
    url: "https://www.youtube.com/embed/D8dkJ7HwIcY"
  },
  {
    title: "Почему в Оазисе вы можете безопасно хранить документы?",
    url: "https://www.youtube.com/embed/KsxiTlk2eaQ"
  },
  {
    title: "Как работает Оазис?",
    url: "https://www.youtube.com/embed/Ep-Ukb84IOE"
  },
  {
    title: "Почему Оазис нельзя заблокировать или запретить?",
    url: "https://www.youtube.com/embed/M4ErkMGBuCc"
  },
  {
    title: "На что похож Оазис?",
    url: "https://www.youtube.com/embed/clIXHU4GIZ0"
  },
  {
    title: "Отличия Оазиса от Блокчейна?",
    url: "https://www.youtube.com/embed/8r9ntB1uzJU"
  },
  {
    title: "Как можно заработать на Оазисе?",
    url: "https://www.youtube.com/embed/_QmtPv4cDDs"
  },
  {
    title: "Кто такой Фармер? Какая связь между Фармером и сетью Оазис?",
    url: "https://www.youtube.com/embed/-nKvp3AF2QY"
  },
  {
    title: "Что нужно, чтобы стать Фармером?",
    url: "https://www.youtube.com/embed/mkJx10MVqpo"
  },
  {
    title: "Какие технические требования к компьютеру Фармера?",
    url: "https://www.youtube.com/embed/wm3cfVzMtAM"
  },
  {
    title: "Какие есть альтернативы домашнему компьютеру для фарминга?",
    url: "https://www.youtube.com/embed/r_ZVUIOvL_0"
  },
  {
    title: "Что такое депозит Фармера и зачем он нужен?",
    url: "https://www.youtube.com/embed/7mdZAfHEXb4"
  },
  {
    title: "Зачем бизнесу нужна сеть Оазиса?",
    url: "https://www.youtube.com/embed/4ZrAzwzyTkY"
  },
  {
    title: "Сколько будет стоить пользование сетью Оазис для бизнеса?",
    url: "https://www.youtube.com/embed/Z4O-VacjdBo"
  },
  {
    title: "На сколько безопасно хранится информация на компьютере Фармера?",
    url: "https://www.youtube.com/embed/j05ocw7UL0Y"
  },
  {
    title: "Если бизнес не доверяет и боится хранить документы в сети Оазис?",
    url: "https://www.youtube.com/embed/Ri5F2QIlV9Q"
  },
  {
    title: "Как бизнес может опубликовать свои документы в сети Оазис?",
    url: "https://www.youtube.com/embed/SZlOYB55Cbs"
  },
  {
    title: "Как можно приводить бизнес в сеть Оазис?",
    url: "https://www.youtube.com/embed/Ol0D2WGc-Lk"
  }
];

const ABOUT = [
  {
    title: "Большое интервью о проекте Оазис",
    url: "https://www.youtube.com/embed/XZtVJiHo-1g"
  },
  {
    title: "Демонстрация работы базы данных Oasis",
    url: "https://www.youtube.com/embed/OZVlpzFfLEM"
  },
  {
    title: "База данных глазами команды разработки",
    url: "https://www.youtube.com/embed/ojCFwe8YhI0"
  }
];

const Faq = () => (
  <Page color={COLOR.DARK}>
    <FormattedMessage id="what_is.title" defaultMessage="What is Oasis?">
      {title => (
        <Block className={style.Block} title={title}>
          <div className={style.Root}>
            <div className={style.Collapse}>
              <Collapse defaultActiveKey={get(window, "location.hash", "#0").replace("#", "")}>
                {ABOUT.map(({ title, url }, index) => (
                  <Panel header={title}>
                    <iframe
                      width="560"
                      height="315"
                      src={url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </Block>
      )}
    </FormattedMessage>

    <FormattedMessage id="faq.title" defaultMessage="FAQ">
      {title => (
        <Block className={style.BlockFaq} title={title}>
          <div className={style.Root}>
            <div className={style.Collapse}>
              <Collapse defaultActiveKey={get(window, "location.hash", "#0").replace("#", "")}>
                {DATA.map(({ title, url }, index) => (
                  <Panel header={title}>
                    <iframe
                      width="560"
                      height="315"
                      src={url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </Block>
      )}
    </FormattedMessage>
  </Page>
);

export default Faq;
