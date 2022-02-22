import React from "react";
import Footer from "../components/common/footer/Footer";
import SubFooter from "../components/common/footer/SubFooter";
import Header from "../components/common/header/Header";
import Nav from "../components/common/header/Nav";
import TopHeader from "../components/common/header/TopHeader";
import Main from "../components/main/Main";
import Section from "../components/section-1/Section";
import SecSection from "../components/section-2/SecSection";
import ThirdSection from "../components/section-3/ThirdSection";
import FourthSection from "../components/section-4/FourthSection";
import FifthSection from "../components/section-5/FifthSection";
import SixthSection from "../components/section-6/SixthSection";
import SeventhSection from "../components/section-7/SeventhSection";
import EightthSection from "../components/section-8/EightthSection";

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
      <EightthSection />
      <Footer />
      <SubFooter />
    </div>
  );
};

export default Home;
