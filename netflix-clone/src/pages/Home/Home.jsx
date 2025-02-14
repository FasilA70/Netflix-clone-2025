import React from "react";
import Header from "../../componet/Header/Header";
import Footer from "../../componet/Footer/Footer";
import Banner from "../../componet/Banner/Banner";
import RowList from "../../componet/RowList/RowList";

let Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;
