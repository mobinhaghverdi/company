import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import TopHeader from "../components/header/TopHeader";
import Main from "../components/main/Main";
import Section from "../components/section-1/Section";
import SecSection from "../components/section-2/SecSection";
import ThirdSection from "../components/section-3/ThirdSection";
import FourthSection from "../components/section-4/FourthSection";
import FifthSection from "../components/section-5/FifthSection";
import SixthSection from "../components/section-6/SixthSection";
import SeventhSection from "../components/section-7/SeventhSection";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Nav />
      <Header />
      <Main />
      <Section />
      <SecSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </div>
  );
};

export default Home;
