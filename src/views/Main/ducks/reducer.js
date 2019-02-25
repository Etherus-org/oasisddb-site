const initialState = {
  cases: [
    {
      icon: require('../assets/cases/data.svg'),
      title: 'БОЛЬШИЕ ДАННЫЕ',
    },
    {
      icon: require('../assets/cases/knowledge.svg'),
      title: 'БАЗЫ ЗНАНИЙ',
    },
    {
      icon: require('../assets/cases/social.svg'),
      title: 'СОЦ. СЕТИ',
    },
    {
      icon: require('../assets/cases/docs.svg'),
      title: 'ОБОРОТ ДОКУМЕНТОВ',
    },
    {
      icon: require('../assets/cases/media.svg'),
      title: 'СМИ',
    },
    {
      icon: require('../assets/cases/storage.svg'),
      title: 'ХРАНИЛИЩЕ ДАННЫХ',
    },
    {
      icon: require('../assets/cases/sharing.svg'),
      title: 'ОБМЕН ФАЙЛАМИ',
    },
  ],
  features: [
    {
      description: 'Отсутствие единого центра управления и отказа, полностью самоорганизованная сеть.',
      icon: require('../assets/features/decentralization.svg'),
      title: 'ДЕЦЕНТРАЛИЗОВАННАЯ',
    },
    {
      description: 'Параллельная работа многих серверов обеспечивает высокую скорость обработки запросов.',
      icon: require('../assets/features/search.svg'),
      title: 'РАСШИРЕННЫЙ ПОИСК',
    },
    {
      description: 'Возможность редактировать и удалять ранее размещенные данные для своего владельца.',
      icon: require('../assets/features/modifable.svg'),
      title: 'МОДИФИЦИРУЕМАЯ',
    },
  ],
  howItWorks: [
    {
      description: 'Все предоставляемые серверы объеденены в одну систему.',
      icon: require('../assets/how_it_works/network.svg'),
      title: 'РАСПРЕДЕЛЕНИЕ СЕТИ',
    },
    {
      description: 'Кто угодно может разместить контент. Он распределяется по разным серверам.',
      icon: require('../assets/how_it_works/upload.svg'),
      title: 'ЗАГРУЗКА',
    },
    {
      description: 'Кто угодно может запросить контент и он соберется в единое целое.',
      icon: require('../assets/how_it_works/download.svg'),
      title: 'ПОИСК И СКАЧИВАНИЕ',
    },
  ],
  media: [
    {
      date: '01.09.2017',
      description: 'As a business tool, Ties.Network enables members to securely connect and transact with top-rated industry professionals. Users collaborate on projects, receive counsel from industry experts and instantly strike deals via smart contracts.',
      icon: '',
      link: 'https://cointelegraph.com/news/tiesnetwork-promises-the-enhanced-linkedin-of-crypto-community',
      title: 'Ties.Network Promises the Enhanced LinkedIn of Crypto- Community',
    },
    {
      date: '25.08.2017',
      description: 'We need confirmed experts in crypto-investment. People who’ve already made a number of correct investment decisions and can help others do the same.',
      icon: '',
      link: 'https://themerkle.com/ties-network-announces-token-generation-event-tge/',
      title: 'Ties.Network Announces Token Generation Event (TGE)',
    },
    {
      date: '08.09.2017',
      description: 'We need confirmed experts in crypto-investment. People who’ve already made a number of correct investment decisions and can help others do the same. ',
      icon: '',
      link: 'http://www.coinfox.info/news/7587-how-do-you-know-who-to-trust-in-the-world-of-icos-and-cryptocurrencies-ties-network-offers-one-possible-solution',
      title: 'How do you know who to trust in the world of ICOs and cryptocurrencies - Ties.Network offers one possible solution ',
    },
  ],
  partners: [
    {
      link: 'https://diwtoken.com/',
      src: require('../assets/partners/diw.png'),
      title: 'DIW',
    },
    {
      link: 'https://exenium.io/',
      src: require('../assets/partners/exenium.png'),
      title: 'Exenium',
    },
    {
      link: 'https://www.varcrypt.io/',
      src: require('../assets/partners/varcrypt.png'),
      title: 'varcrypt',
    },
    {
      link: 'https://credits.com/ru/Home/New_Ins/2257',
      src: require('../assets/partners/credits.png'),
      title: 'Credits',
    },
    {
      link: 'https://canya.io/index.html',
      src: require('../assets/partners/canya.png'),
      title: 'CanYa',
    },
    {
      link: 'http://www.krtoken.com/',
      src: require('../assets/partners/krtoken.png'),
      title: 'KrToken',
    },
    {
      link: 'https://blocklancer.net/',
      src: require('../assets/partners/blocklancer.png'),
      title: 'blocklancer',
    },
    {
      link: 'https://wishknish.com/',
      src: require('../assets/partners/wishknish.png'),
      title: 'WishKnish',
    },
    {
      link: 'http://www.ecos.ee/',
      src: require('../assets/partners/ecos.png'),
      title: 'ECOS',
    },
    {
      link: 'https://medium.com/iagon-official/iagon-and-ties-db-partnership-410ffb1a4192',
      src: require('../assets/partners/iagon.png'),
      title: 'IAGON',
    },
    {
      link: 'https://bcharity.io/',
      src: require('../assets/partners/bcharity.png'),
      title: 'BCharity',
    },
    {
      link: 'https://hoqu.io',
      src: require('../assets/partners/hoqu.png'),
      title: 'HOQU',
    },
  ],
  roadmap: [
    {
      description: 'Прототипирование API. Публикация Обзора технологии (White Paper)',
      from: '2017-01-01',
      title: 'Q1 2017',
      to: '2017-03-31',
    },
    {
      description: 'Маркетинговая компания предварительной продажи токена. Публикация Технического описания (Yellow Paper). Запуск прототипа и тестирование. TGE анонс.',
      from: '2017-07-01',
      title: 'Q3 2017',
      to: '2017-09-30',
    },
    {
      description: 'Начало разработки OasisDDB.',
      from: '2017-10-01',
      title: 'Q4 2017',
      to: '2017-12-31',
    },
    {
      description: 'Разработка альфа-версии OasisDDB.',
      from: '2018-01-01',
      title: 'Q1 2018',
      to: '2018-03-31',
    },
    {
      description: 'Запуск и тестирование альфа-версии OasisDDB.',
      from: '2018-04-01',
      title: 'Q2 2018',
      to: '2018-06-30',
    },
    {
      description: 'Тестирование бета-версии OasisDDB.',
      from: '2018-07-01',
      title: 'Q3 2018',
      to: '2018-09-30',
    },
    {
      description: 'Запуск полной децентрализации и бета-версии OasisDDB. Маректинговая компания.',
      from: '2018-10-01',
      title: 'Q4 2018',
      to: '2018-12-31',
    },
    {
      description: 'Интеграция с другими блокчейнами.',
      from: '2019-01-01',
      title: 'Q1 2019',
      to: '2019-03-31',
    },
  ],
  social: [
    {
      id: 'Facebook',
      link: 'https://facebook.com',
      title: 'Facebook',
    },
    {
      id: 'LinkedIn',
      link: 'https://linkedin.com/',
      title: 'LinkedIn',
    },
    {
      id: 'Twitter',
      link: 'https://twitter.com',
      title: 'Twitter',
    },
    {
      id: 'YouTube',
      link: 'https://youtube.com',
      title: 'YouTube',
    },
    {
      id: 'Reddit',
      link: 'https://reddit.com',
      title: 'Reddit',
    },
    {
      id: 'GitHub',
      link: 'https://github.com',
      title: 'GitHub',
    },
    {
      id: 'Bitcoin',
      link: 'https://facebook.com',
      title: 'Bitcoin',
    },
  ],
  whyNeed: [
    {
      description: 'Серверы OasisDDB полностью независимы, расположены по всей планете и принимают платежи в криптовалюте (ODDB-токен), что дает dapps-y очень гибкие возможности для работы с сетью OasisDDB.',
      icon: require('../assets/why_need/daaps.svg'),
      link: {
        href: '/',
        title: 'СТАТЬ ДЕЦЕНТРАЛИЗОВАННЫМ',
      },
      preface: 'Решения для централизованного хранения уязвимы. Используемые сегодня децентрализованные решения не позволяют осуществлять быстрый поиск и изменение данных.',
      title: 'DAPPS',
    },
    {
      description: 'Мы берем из конкретного блока системы шифрования данных для генерации ключей в подписи и предлагаем создать децентрализованные приложения для этого блока, объявив, что данные будут храниться в OasisDDB.',
      icon: require('../assets/why_need/blockchains.svg'),
      link: {
        href: '/',
        title: 'СТАТЬ КОНКУРЕНТНЫМ',
      },
      preface: 'На сегодняшний день не существует эффективного решения для хранения данных, которое влечет за собой сложность привлечения и хранения dApps.',
      title: 'БЛОКЧЕЙН',
    },
    {
      description: 'Большие проекты могут хранить файловые индексы OasisDDB, а в будущем хранить в OasisDDB и сами файлы. Любой крупный проект может сделать форк сети OasisDDB для хранения данных в отдельной сети.',
      icon: require('../assets/why_need/international.svg'),
      link: {
        href: '/',
        title: 'СТАТЬ БЕЗГРАНИЧНЫМ',
      },
      preface: 'Сегодня сложно построить самообслуживание трансграничной инфраструктуры.',
      title: 'МЕЖДУНАРОДНЫЕ ПРОЕКТЫ',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
