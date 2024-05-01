import {useState, useRef, useEffect }from 'react';
import MiniCard from "./MiniCard";
import CountUp from "react-countup";

function MainCard() {
  // const [isVisible, setIsVisible] = useState(false);
  // const countUpRef = useRef(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   });

  //   observer.observe(countUpRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div >
       <div className="ctaArea">
        <div className="container">
          <div className="bgDarkGreen ctaAreaBg">
            <div className="row align-items-center">
              <div className="col-12 col-xl-7">
                <div className=" aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-easing="linear">
                  <p className="ctaSubtitle fw-bold mb-2">Explore New Life</p>
                  <h2 className="sectionTitleLight fw-bold mb-4">
                    Don’t just find. Be found put your CV in front of great
                    employers
                  </h2>
                  <p className="sectionDescLight mb-40">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                  <a  className="ctaBtnLink">
                    Job Post Now
                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} viewBox="0 0 14 10" fill="none">
                      <path d="M9 9L13 5M13 5L9 1M13 5L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
                <div className="ctaCounter mt-5">
                  <div className="ctaCounterItem">
                    <h3 className="ctaCounterTitle fw-bold">
                      <span className="counter">950</span><span>M+</span>
                    </h3>
                    <p className="ctaCounterDesc fw-bold">Total Freelancers</p>
                  </div>
                  <div className="ctaCounterItem">
                    <h3 className="ctaCounterTitle fw-bold">
                      <span className="counter">32</span><span>M+</span>
                    </h3>
                    <p className="ctaCounterDesc fw-bold">Total Freelancers</p>
                  </div>
                  <div className="ctaCounterItem">
                    <h3 className="ctaCounterTitle fw-bold">
                      <span className="counter">120</span><span>M+</span>
                    </h3>
                    <p className="ctaCounterDesc fw-bold">Total Freelancers</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 mt-5 mt-xl-0">
                <div className="cta-img">
                  <img src="./assets/images/cta-img.png" className="img-fluid w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MainCard;
