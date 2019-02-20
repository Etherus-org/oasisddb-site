const initialState = {
  advisors: [
  ],
  team: [
    {
      image: require('../assets/neymark.png'),
      name: 'Alexander Neymark',
      position: 'Founder, CEO',
      description: 'Alexander Neymark has a significant experience in launching and developing innovative financial services in banks and telecommunications companies (starting from 2000). In 2012, he began his work on creating a platform for aggregating financial user data (account aggregation technology), which was implemented in the final development of Krawlly (krawlly.com) creating smart crawlers for aggregating financial user data.',
      linkedin: 'https://www.linkedin.com/in/neymark/',
    },
    {
      image: require('../assets/kochin.png'),
      name: 'Dmitry Kochin',
      position: 'Founder, CTO, PhD',
      description: 'Dmitry Kochin has strong experience in IT and is PhD in Technical Sciences. Serial entrepreneur in IT sector since 2005.He has been involved in a variety of software projects dealing with payment processing, account aggregation, computer telephony and even financial services within online games. Since 2014 he is absorbed in his study of blockchain and cryptocurrency problems.',
      linkedin: 'https://www.linkedin.com/in/kochin/',
    },
    {
      image: require('../assets/filatov.png'),
      name: 'Anton Filatov',
      position: 'Head of Software Development',
      description: 'Starting his career as a programmer in 2006, Anton actively participated in numerous and diverse IT projects, from video surveillance systems, financial systems to state-level automation systems. Has extensive experience in software development using modern programming languages and advanced technologies.',
      linkedin: 'https://www.linkedin.com/in/antonfilatov/',
    },
    {
      image: require('../assets/mukhanov.png'),
      name: 'Sergey Mukhanov',
      position: 'Head of Product Management',
      description: 'Sergey Mukhanov is a skilled professional with over 10-year experience in product management and development of innovative payment solutions from scratch to 40-million audience. He has extensive work experience with banks, telecommunication companies and worldwide payment systems.',
      linkedin: 'https://www.linkedin.com/in/mukhanov/',
    },
    {
      image: require('../assets/vyatkin.png'),
      name: 'Ivan Vyatkin',
      position: 'Software developer',
      description: 'MGIMO college graduate with 6 years of experience in IT. Participated in projects of different kind: online stores, media portals (news), aggregation of accounts (Krawlly) and so on. Since 2014, Ivan have been working on the development of PWA (Progressive Web Apps) and studying various ideas for creating a user-friendly UI / UX interface.',
      linkedin: 'https://www.linkedin.com/in/ivanvyatkin/',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
