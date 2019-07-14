const initialState = {
  cases: [
    { id: "big_data", icon: require("../assets/cases/data.svg") },
    { id: "knowledge", icon: require("../assets/cases/knowledge.svg") },
    { id: "networks", icon: require("../assets/cases/social.svg") },
    { id: "documents", icon: require("../assets/cases/docs.svg") },
    { id: "media", icon: require("../assets/cases/media.svg") },
    { id: "storage", icon: require("../assets/cases/storage.svg") },
    { id: "sharing", icon: require("../assets/cases/sharing.svg") }
  ],
  features: [
    { id: "decentralization", icon: require("../assets/features/decentralization.svg") },
    { id: "advanced_search", icon: require("../assets/features/search.svg") },
    { id: "modifiable", icon: require("../assets/features/modifable.svg") }
  ],
  howItWorks: [
    {
      id: "network",
      icon: require("../assets/how_it_works/network.svg"),
      title: "РАСПРЕДЕЛЕНИЕ СЕТИ"
    },
    { id: "upload", icon: require("../assets/how_it_works/upload.svg") },
    { id: "download", icon: require("../assets/how_it_works/download.svg") }
  ],
  media: [
    {
      id: "0",
      icon: "",
      link:
        "https://cointelegraph.com/news/tiesnetwork-promises-the-enhanced-linkedin-of-crypto-community"
    },
    {
      id: "1",
      icon: "",
      link: "https://themerkle.com/ties-network-announces-token-generation-event-tge/"
    },
    {
      id: "2",
      icon: "",
      link:
        "http://www.coinfox.info/news/7587-how-do-you-know-who-to-trust-in-the-world-of-icos-and-cryptocurrencies-ties-network-offers-one-possible-solution"
    }
  ],
  partners: [
    {
      link: "https://diwtoken.com/",
      src: require("../assets/partners/diw.png"),
      title: "DIW"
    },
    {
      link: "https://exenium.io/",
      src: require("../assets/partners/exenium.png"),
      title: "Exenium"
    },
    {
      link: "https://www.varcrypt.io/",
      src: require("../assets/partners/varcrypt.png"),
      title: "varcrypt"
    },
    {
      link: "https://credits.com/ru/Home/New_Ins/2257",
      src: require("../assets/partners/credits.png"),
      title: "Credits"
    },
    {
      link: "https://canya.io/index.html",
      src: require("../assets/partners/canya.png"),
      title: "CanYa"
    },
    {
      link: "http://www.krtoken.com/",
      src: require("../assets/partners/krtoken.png"),
      title: "KrToken"
    },
    {
      link: "https://blocklancer.net/",
      src: require("../assets/partners/blocklancer.png"),
      title: "blocklancer"
    },
    {
      link: "https://wishknish.com/",
      src: require("../assets/partners/wishknish.png"),
      title: "WishKnish"
    },
    {
      link: "http://www.ecos.ee/",
      src: require("../assets/partners/ecos.png"),
      title: "ECOS"
    },
    {
      link: "https://medium.com/iagon-official/iagon-and-ties-db-partnership-410ffb1a4192",
      src: require("../assets/partners/iagon.png"),
      title: "IAGON"
    },
    {
      link: "https://bcharity.io/",
      src: require("../assets/partners/bcharity.png"),
      title: "BCharity"
    },
    {
      link: "https://hoqu.io",
      src: require("../assets/partners/hoqu.png"),
      title: "HOQU"
    }
  ],
  roadmap: [
    { id: "2017_q1", from: "2017-01-01", to: "2017-03-31" },
    { id: "2017_q3", from: "2017-07-01", to: "2017-09-30" },
    { id: "2017_q4", from: "2017-10-01", to: "2017-12-31" },
    { id: "2018_q1", from: "2018-01-01", to: "2018-03-31" },
    { id: "2018_q2", from: "2018-04-01", to: "2018-06-30" },
    { id: "2018_q3", from: "2018-07-01", to: "2018-09-30" },
    { id: "2018_q4", from: "2018-10-01", to: "2018-12-31" },
    { id: "2019_q1", from: "2019-01-01", to: "2019-03-31" }
  ],
  social: [
    {
      id: "Facebook",
      link: "https://facebook.com",
      title: "Facebook"
    },
    {
      id: "LinkedIn",
      link: "https://linkedin.com/",
      title: "LinkedIn"
    },
    {
      id: "Twitter",
      link: "https://twitter.com",
      title: "Twitter"
    },
    {
      id: "YouTube",
      link: "https://www.youtube.com/channel/UC_0vG0mSFb4_LbaFzkSLT8w/",
      title: "YouTube"
    },
    {
      id: "Reddit",
      link: "https://reddit.com",
      title: "Reddit"
    },
    {
      id: "GitHub",
      link: "https://github.com",
      title: "GitHub"
    },
    {
      id: "Bitcoin",
      link: "https://facebook.com",
      title: "Bitcoin"
    }
  ],
  whyNeed: [
    {
      id: "dapps",
      icon: require("../assets/why_need/daaps.svg"),
      href: "/"
    },
    {
      id: "blockchain",
      icon: require("../assets/why_need/blockchains.svg"),
      href: "/"
    },
    {
      id: "international",
      icon: require("../assets/why_need/international.svg"),
      href: "/"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
