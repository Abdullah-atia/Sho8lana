import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Slider.module.css'
function Categories() {
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
        classNameName=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
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
        <div className="" style={{width: "216px",  marginRight: "24px"}} >
            <div className="featureCategoryCard bg-white">
              <img src="./assets/categories/1.svg" className="mb-4" style={{width: "70px", height: "75px", color: "var(--dark-200)"}} alt="" />
              <h3  className={styles.fwSemibold}>
                <a className='featureCategoryLink' href="#">Design &amp; Creative</a>
              </h3>
              <p className={`${styles.featureCategoryDesc} fs-6`}>3,560 Skills</p>
            </div>
          </div>

      </Carousel>
    </div>
  );
}


export default Categories
