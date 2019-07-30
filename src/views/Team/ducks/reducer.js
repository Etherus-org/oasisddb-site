const initialState = {
  advisors: [],
  team: [
    {
      id: "neymark",
      image: require("../assets/neymark.png"),
      link: "https://www.linkedin.com/in/neymark/"
    },
    {
      id: "kochin",
      image: require("../assets/kochin.png"),
      link: "https://www.linkedin.com/in/kochin/"
    },
    {
      id: "filatov",
      image: require("../assets/filatov.png"),
      link: "https://www.linkedin.com/in/antonfilatov/"
    },
    {
      id: "karevskaya",
      image: require("../assets/karevskaya.png"),
      link: "https://www.linkedin.com/in/mariakarevskaya/"
    },
    {
      id: "vyatkin",
      image: require("../assets/vyatkin.png"),
      link: "https://www.linkedin.com/in/ivanvyatkin/"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
