import React from "react";
import Header from "./Components/Header";
import "./globals.css";
import MainHero from "./Components/MainHero";
import Articles from "./Components/Articles";
import TableList from "./Components/TableList";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
const page = () => {
  return (
    <div className="container flex flex-col z-100">
      <Header />
      <MainHero />
      <Articles/>
      <TableList/>
      <Profile/>
      <Footer/>
    </div>
  );
};

export default page;
