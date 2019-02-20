const initialState = {
  cases: [
    {
      icon: require('../assets/cases/data.svg'),
      title: 'BIG DATA',
    },
    {
      icon: require('../assets/cases/knowledge.svg'),
      title: 'KNOWLEDGE CASES',
    },
    {
      icon: require('../assets/cases/social.svg'),
      title: 'SOCIAL NETWORKS',
    },
    {
      icon: require('../assets/cases/docs.svg'),
      title: 'OPEN DOCUMENTS REGISTRIES',
    },
    {
      icon: require('../assets/cases/media.svg'),
      title: 'MASS MEDIA',
    },
    {
      icon: require('../assets/cases/storage.svg'),
      title: 'DATA STORAGE',
    },
    {
      icon: require('../assets/cases/sharing.svg'),
      title: 'FILE SHARING',
    },
  ],
  features: [
    {
      description: 'The absence of a single center control and failure, a completely self–organized network.',
      icon: require('../assets/features/decentralization.svg'),
      title: 'DECENTRALIZATION',
    },
    {
      description: 'Parallel operation of many servers ensures high speed of processing requests.',
      icon: require('../assets/features/search.svg'),
      title: 'ADVANCED SEARCH',
    },
    {
      description: 'Ability to edit and delete previously posted data for their owner.',
      icon: require('../assets/features/modifable.svg'),
      title: 'MODIFIABLE',
    },
  ],
  howItWorks: [
    {
      description: 'Все предоставляемые серверы объеденены в одну систему.',
      icon: require('../assets/how_it_works/network.svg'),
      title: 'NETWORK ARRANGEMENT',
    },
    {
      description: 'Кто угодно может разместить контент. Он распределяется по разным серверам.',
      icon: require('../assets/how_it_works/upload.svg'),
      title: 'UPLOAD',
    },
    {
      description: 'Кто угодно может запросить контент и он соберется в единое целое.',
      icon: require('../assets/how_it_works/download.svg'),
      title: 'SEARCH AND DOWNLOAD',
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
      description: 'API prototyping. White paper published.',
      from: '2017-01-01',
      title: 'Q1 2017',
      to: '2017-03-31',
    },
    {
      description: 'Pre Token generation event marketing campaign. Yellow paper published. Prototype launch and testing. TGE announced.',
      from: '2017-07-01',
      title: 'Q3 2017',
      to: '2017-09-30',
    },
    {
      description: 'Start of OasisDDB development.',
      from: '2017-10-01',
      title: 'Q4 2017',
      to: '2017-12-31',
    },
    {
      description: 'Development of Alpha OasisDDB.',
      from: '2018-01-01',
      title: 'Q1 2018',
      to: '2018-03-31',
    },
    {
      description: 'OasisDDB Alpha launching and testing.',
      from: '2018-04-01',
      title: 'Q2 2018',
      to: '2018-06-30',
    },
    {
      description: 'OasisDDB Beta testing.',
      from: '2018-07-01',
      title: 'Q3 2018',
      to: '2018-09-30',
    },
    {
      description: 'Full decentralization launch. OasisDDB Beta launch. OasisDDB marketing campaign.',
      from: '2018-10-01',
      title: 'Q4 2018',
      to: '2018-12-31',
    },
    {
      description: 'Integration with other blockchains started.',
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
      description: 'OasisDDB servers are completely independent, scattered across the planet and accept payment in the crypto currency (TIE-token), which gives dapps-y very flexible options for working with the network OasisDDB.',
      icon: require('../assets/why_need/daaps.svg'),
      link: {
        href: '/',
        title: 'BE 100% DECENTRALIZED',
      },
      preface: 'Centralized storage solutions are vulnerable. Decentralized solutions used Today, they do not allow a quick search and modification of data.',
      title: 'DAPPS',
    },
    {
      description: 'We take from a concrete block system data encryption to generate keys in the signature and suggest that the creation of decentralized applications for This block, announcing that the data will be stored in OasisDDB.',
      icon: require('../assets/why_need/blockchains.svg'),
      link: {
        href: '/',
        title: 'BE 100% COMPETITIVE',
      },
      preface: 'Today there is no effective storage solution data that entails the difficulty of attracting and hold dApps.',
      title: 'BLOCKCHAINS',
    },
    {
      description: 'Large projects can store OasisDDB file indexes, and in the future, store in OasisDDB and the files themselves. Any large project can make a fork of OasisDDB network to store data in a separate network.',
      icon: require('../assets/why_need/international.svg'),
      link: {
        href: '/',
        title: 'BE 100% BOUNDLESS',
      },
      preface: 'It is difficult to build self-service today cross-border infrastructure.',
      title: 'INTERNATIONAL PROJECTS',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
