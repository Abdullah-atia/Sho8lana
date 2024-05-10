function Header() {
    return (
        <div className="heroOne">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-xl-6 mt-n5">
        <div>
          <h1
            className="heroOneTitle fw-bold"
            data-aos="fade-up"
            // data-aos-duration={1000}
            data-aos-easing="linear"
          >
            Find Your Perfect
            <span className="highlightedText"> Freelancer </span>
            Quick and Easy
          </h1>
          <div className="pt-5">
            <form>
              <div className="heroFormWrapper bg-white d-flex position-relative">
                <div>
                  <select className="form-select shadow-none">
                    <option value={0} selected="">
                      All Categories
                    </option>
                    <option value={1}>Animation</option>
                    <option value={2}>Web Design</option>
                    <option value={3}>Graphics</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Search for any service..."
                  />
                  <button className="heroFormBtn position-absolute">
                    <svg
                      width={19}
                      height={18}
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                        stroke="#F2F2F2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 17L14 13"
                        stroke="#F2F2F2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt60 d-flex flex-column flex-sm-row flex-wrap gap-4 align-items-center ">
            <div className="d-flex gap-3 align-items-center">
              <div className="heroGroupImgWrapper">
                <img src="./assets/images/gp-1.png" className="heroGroupImg" alt="" />
                <img src="./assets/images/gp-2.png" className="heroGroupImg" alt="" />
                <img src="./assets/images/gp-3.png" className="heroGroupImg" alt="" />
              </div>
              <div>
                <h3 className="text-white heroCounterTitle fw-bold">39M+</h3>
                <p className="text-white">Happy Customers</p>
              </div>
            </div>
            <div className="heroRating">
              <h3 className="text-white heroCounterTitle fw-bold">4.9</h3>
              <p class="text-white">Rating</p>
             
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-xl-5 mt-5 mt-xl-0">
        <div className="">
          <img
            src="./Images/big-b.png"
            className="heroOneImg text-end"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Header
