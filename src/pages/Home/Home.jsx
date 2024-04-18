import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import styles from "./Home.module.css";

function Home (){
    return(
        <div>
            <Header />
            <Slider />
        </div>
    )
}
function Header() {
  return (
    <div className={`${styles.main} mt-20 flex flex-row  h-full max-h-full `}>
      
      <div className="basis-1/3 m-5 "><h1 className={`${styles.title} text-6xl `}>Hire the Top 3% of Freelance Talent®</h1> 
      <p className="text-1xl">Toptal is an exclusive network of the
      top freelance software developers, designers, finance experts, product
      managers, and project managers in the world. Top companies hire Toptal
      freelancers for their most important projects.</p></div>
      <img className="basis-2/3 max-w-fit ml-44" src="./Images/big-b.png" alt="person"  />
    </div>
    
  );
}
function Slider(){
    return(
        <div className={styles.slid}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`${styles.mySwiper}`}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

    )
}


export default Home;
