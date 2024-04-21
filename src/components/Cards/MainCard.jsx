import {useState, useRef, useEffect }from 'react';
import MiniCard from "./MiniCard";
import CountUp from "react-countup";

function MainCard() {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(countUpRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="rounded-lg" style={{ padding: "8rem", margin: "0 auto" }}>
      <div
        className="flex justify-between rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{
          backgroundColor: "var(--green-300)",
          fontFamily: "var(--main-font-family)",
          //   width: "1280px",
          height: "473px",
        }}
      >
        <div
          className="p-5 leading-normal text-white items-start"
          data-aos="fade-up"
        >
          Explore New Life
          <h5
            className="text-2xl font-bold tracking-tight text-white dark:text-white mb-4 mt-2"
            style={{
              fontSize: " 40px",
              lineHeight: "40px",
              width: "700px",
            }}
          >
            Don’t just find. Be found put your CV in front of great employers
          </h5>
          <p
            className="mb-3 font-normal text-white dark:text-gray-400"
            style={{
              lineHeight: "40px",
              width: "700px",
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <div className="flex gap-2 item-end" style={{ fontSize: "24px" }}>
            <MiniCard countUpRef = {countUpRef} >
              <h3 className="cta-counter-title fw-bold ">
                <span
                  className="counter"
                  style={{ fontWeight: "700px", fontSize: "40px" }}
                >
                  {isVisible && (
          <CountUp start={0} end={950} duration={3} />
        )}
                </span>
                <span>M+</span>
              </h3>
              <p className="cta-counter-desc fw-bold text-gray-500 text-sm">
                Total Freelancers
              </p>
            </MiniCard>
            <MiniCard countUpRef={countUpRef}>
              <h3 className="cta-counter-title fw-bold  ">
                <span
                  className="counter"
                  style={{ fontWeight: "700px", fontSize: "40px" }}
                >
                  <CountUp  end={120} duration={8}/>
                </span>
                <span>M+</span>
              </h3>
              <p className="cta-counter-desc fw-bold text-gray-500 text-sm">
                Total Freelancers
              </p>
            </MiniCard>
            <MiniCard countUpRef={countUpRef}>
              <h3 className="cta-counter-title fw-bold ">
                <span
                  className="counter"
                  style={{ fontWeight: "700px", fontSize: "40px" }}
                >
                  <CountUp  end={32} duration={8}/>
                </span>
                <span>M+</span>
              </h3>
              <p className="cta-counter-desc fw-bold text-gray-500 text-sm">
                Total Freelancers
              </p>
            </MiniCard>
          </div>
        </div>
        <img
          className="object-cover rounded-t-lg p-4 md:rounded-none md:rounded-s-lg"
          src="./assets/images/cta-img.png"
          alt=""
          width={519.328}
          height={461.625}
        />
      </div>
    </div>
  );
}

export default MainCard;
