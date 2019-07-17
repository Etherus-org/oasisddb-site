import React from "react";

/** Components **/
import Page from "components/Page";

import Cases from "./components/Cases";
import Events from "./components/Events";
import Features from "./components/Features";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Links from "./components/Links";
import Media from "./components/Media";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import WhyNeed from "./components/WhyNeed";
import WhyUs from "./components/WhyUs";

import styles from "./Desktop.scss";

const LandingMain = props => (
  <Page className={styles.Root}>
    <Header {...props} />
    <Links />
    <Features />
    <WhyNeed />
    <HowItWorks />
    <WhyUs />
    <Cases />
    <Events />
    <Media />
    <Partners />
  </Page>
);

export default LandingMain;
