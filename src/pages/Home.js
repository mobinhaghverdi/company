import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import TopHeader from "../components/header/TopHeader";
import Main from "../components/main/Main";
import Section from "../components/section-1/Section";
import SecSection from "../components/section-2/SecSection";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Nav />
      <Header />
      <Main />
      <Section />
      <SecSection />
    </div>
  );
};

export default Home;
