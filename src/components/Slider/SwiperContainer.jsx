import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../swiper/swiper-bundle.min.css';
// import "../../../node_modules/swiper/swiper-bundle.min.css";
// import "swiper/swiper-bundle.min.css";
import "swiper/css"; // Import Swiper's CSS
import "swiper/css/navigation"; // Optional: If you need navigation buttons
import "swiper/css/autoplay";


const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      navigation
      autoplay = {{ delay: 3000 }}
      breakpoints={{
        // When window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div className="feature-category-card bg-white">
          <img src="./assets/categories/1.svg" className="mb-4" alt="" />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Graphics & Design</a>
          </h3>
          <p className="feature-category-desc fs-6">2,520 Skills</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="feature-category-card bg-white">
          <img src="./assets/categories/2.svg" className="mb-4" alt="" />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Digital Marketing</a>
          </h3>
          <p className="feature-category-desc fs-6">1,122 Skills</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="feature-category-card bg-white">
          <img src="./assets/categories/3.svg" className="mb-4" alt="" />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="feature-category-card bg-white">
          <img src="./assets/categories/3.svg" className="mb-4" alt="" />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="feature-category-card bg-white">
          <img src="./assets/categories/3.svg" className="mb-4" alt="" />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Slider;
