// import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider({ children }) {
  // Function to handle previous button click
  

  // Function to handle next button click

  return (
    <div>
      <Carousel
        // ref={carouselRef}
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000} 
        transitionDuration={500}
        shouldResetAutoplay={false}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        // keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {children}
        {/* Add other carousel items similarly */}
      </Carousel>
    </div>
  );
}


export default Slider;
