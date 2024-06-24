import React, { useEffect } from "react";


import Categories from "../../components/Slider/Categories";

import ServicesSlider from "../../components/Slider/ServicesSlider";

import styles from "./Home.module.css";
import MainCard from "../../components/Cards/MainCard";
import BusinessCard from "../../components/Cards/BusinessCard";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'

function Home() {




  return (
    <div>
      <Header />
      
      {/* <Header2 /> */}
      <div  style={{backgroundColor :'var(--off-white)'}}>
        <Categories />
      </div>
      <div className="container py110" >
        <ServicesSlider />
      </div>
      <div className="container py110">
        <MainCard />
      </div>
      <div style={{marginTop :"100px"}}>
        <BusinessCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
