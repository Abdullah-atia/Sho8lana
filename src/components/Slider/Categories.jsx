import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Slider.module.css'
import useCategory from "../../hooks/useCategory";
import Loader from "../Loading/Loader";
import toast from "react-hot-toast";

function Categories() {
  const {data, isLoading,isError, error} = useCategory()
  console.log(data?.data.result)
  if(isLoading) {
    return <Loader />
  }
  if(isError) {
    return toast.error(error.message)
  }
    return (
    <div className="container py110">
      <div className="mb-4">
        <h2 className={styles.subTitle}>Our Services</h2>
        <p className={styles.desc}>Get some Inspirations from 86K+ skills</p>

      </div>
      
          
      <Carousel
        // ref={carouselRef}
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000} 
        transitionDuration={500}
        shouldResetAutoplay={false}
        centerMode={false}
        classNameName=""
        // containerClass="container-with-dots"
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
            items: 5,
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
        {data?.data.result.map((item) =>{
          return (
            <div className="me-3 d-flex justify-content-center align-items-center text-center" key={item.id}>
              <div className="featureCategoryCard bg-white">
                <img
                  src={item.imageUrl}
                  className="mb-4"
                  style={{
                    width: "70px",
                    height: "75px",
                    color: "var(--dark-200)",
                  }}
                  alt={item.name}
                />
                <h3 className={styles.fwSemibold}>
                  <a className="featureCategoryLink" href="#">
                    {item.name}
                  </a>
                </h3>
                {/* <p className={`${styles.featureCategoryDesc} fs-6`}>
                  3,560 Skills
                </p> */}
              </div>
            </div>
          );
        })}
        
       


      </Carousel>
    </div>
  );
}


export default Categories
