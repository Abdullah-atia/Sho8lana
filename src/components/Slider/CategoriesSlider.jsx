import Slider from "./Slider";
import styles from "./Slider.module.css";

function CategoriesSlider() {

    return (
      <div className="" >
                  <h2 className={styles.subTitle}>Featured Categories</h2>
        <div className="flex justify-between mb-1">
          <div>
  
            <p className={styles.desc}>Get some Inspirations from 86K+ skills</p>
          </div>
          <div>
          </div>
        </div>
  
        <Slider>
        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3 border-2"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3 border-2"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>

        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3 border-2"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3 border-2"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
        <div
          className="feature-category-card bg-white rounded-lg mx-5 p-3 border-2"
          style={{width: "215px", height:"230px" }}
        >
          <img
            src="./assets/categories/1.svg"
            className="mb-4 mx-auto"
            alt=""
          />
          <h3 className="feature-category-link fw-semibold ">
            <a href="services.html">Branding Design</a>
          </h3>
          <p className="feature-category-desc fs-6">3,999 Skills</p>
        </div>
        </Slider>
      </div>
    );
  }
export default CategoriesSlider
