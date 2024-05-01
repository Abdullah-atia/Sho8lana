function BusinessCard() {
  return (
    <div>
        <div className="pt-110 bg-offWhite">
        <div className="container">
          <div className="ctaWrapper position-relative" >
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration={1000} data-aos-easing="linear" className="aos-init">
                  <h2 className="sectionTitleLight fw-bold mb-4">
                    Find the talent needed to get your business growing.
                  </h2>
                  <p className="text-white mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                  <a href="contact.html" className="ctaBtnLink">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} viewBox="0 0 14 10" fill="none">
                      <path d="M9 9L13 5M13 5L9 1M13 5L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></a>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <img src="./assets/images/men-women.png" className="ctaPeople position-absolute d-none d-lg-block" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
        
      
    </div>
  );
}

export default BusinessCard;
