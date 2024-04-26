import React from 'react';


function Nav() {
  return (
      <>
<header className="headerPrimary">
  <div className="container">
    <nav className="navbar navbar-expand-xl justify-content-between">
      <a href="index.html">
        <img height={50} width={40} src="./logo.svg" alt="" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="d-block d-xl-none">
            <div className="logo">
              <a href="index.html">
                <img src="./logo.svg" alt="" />
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </a>
            <div className="dropdown-menu">
              <div className="d-flex flex-column flex-xl-row">
                <ul className='list-unstyled'>
                  <li>
                    <a href="index.html" className="dropdown-item">
                      <span>Home Main</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-2.html" className="dropdown-item">
                      <span>Home Two</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Freelancer
            </a>
            <div className="dropdown-menu">
              <div className="d-flex flex-column flex-xl-row">
                <ul className='list-unstyled'>
                  <li>
                    <a href="freelancers.html" className="dropdown-item">
                      <span>Freelancers</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="freelancer-details.html"
                      className="dropdown-item"
                    >
                      <span>Freelancer Details</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About Us
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="services.html" className="dropdown-item">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="service-details.html" className="dropdown-item">
                  <span>Service Details</span>
                </a>
              </li>
              <li>
                <a href="job-posts.html" className="dropdown-item">
                  <span>Job Post</span>
                </a>
              </li>
              <li>
                <a href="job-details.html" className="dropdown-item">
                  <span>Job Details</span>
                </a>
              </li>
              <li>
                <a href="seller-dashboard.html" className="dropdown-item">
                  <span>Seller Dashboard</span>
                </a>
              </li>
              <li>
                <a href="buyer-dashboard.html" className="dropdown-item">
                  <span>Buyer Dashboard</span>
                </a>
              </li>
              <li>
                <a href="buyer-details.html" className="dropdown-item">
                  <span>Buyer Details</span>
                </a>
              </li>
              <li>
                <a href="terms-conditions.html" className="dropdown-item">
                  <span>Terms and Policy</span>
                </a>
              </li>
              <li>
                <a href="faqs.html" className="dropdown-item">
                  <span>Faq</span>
                </a>
              </li>
              <li>
                <a href="privacy-policy.html" className="dropdown-item">
                  <span>Privacy and Policy</span>
                </a>
              </li>
              <li>
                <a href="price.html" className="dropdown-item">
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="404.html" className="dropdown-item">
                  <span>404 Page</span>
                </a>
              </li>
              <li>
                <a href="signin.html" className="dropdown-item">
                  <span>Signin Page</span>
                </a>
              </li>
              <li>
                <a href="signup.html" className="dropdown-item">
                  <span>Signup Page</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="blogs.html" className="dropdown-item">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="blog-details.html" className="dropdown-item">
                  <span>Blog Details</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-4 mt-4">
          <div className="d-flex d-lg-none">
            <a href="signin.html" className="headerBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={17}
                viewBox="0 0 13 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5 7.55556C8.55134 7.55556 10.2143 5.86419 10.2143 3.77778C10.2143 1.69137 8.55134 0 6.5 0C4.44866 0 2.78571 1.69137 2.78571 3.77778C2.78571 5.86419 4.44866 7.55556 6.5 7.55556ZM6.5 17C10.0899 17 13 15.3086 13 13.2222C13 11.1358 10.0899 9.44444 6.5 9.44444C2.91015 9.44444 0 11.1358 0 13.2222C0 15.3086 2.91015 17 6.5 17Z"
                  fill="white"
                />
              </svg>
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-right d-flex align-items-center gap-4">
        <div className="align-items-center d-none d-lg-flex">
          <a href="" className="headerBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={17}
              viewBox="0 0 13 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 7.55556C8.55134 7.55556 10.2143 5.86419 10.2143 3.77778C10.2143 1.69137 8.55134 0 6.5 0C4.44866 0 2.78571 1.69137 2.78571 3.77778C2.78571 5.86419 4.44866 7.55556 6.5 7.55556ZM6.5 17C10.0899 17 13 15.3086 13 13.2222C13 11.1358 10.0899 9.44444 6.5 9.44444C2.91015 9.44444 0 11.1358 0 13.2222C0 15.3086 2.91015 17 6.5 17Z"
                fill="white"
              ></path>
            </svg>
            Login
          </a>
        </div>
        <button
          className="navbar-toggler d-block d-xl-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </nav>
  </div>
</header>
<div className="d-none d-xl-block secondaryNavWrapper">
  <div className="container">
    <div className="position-relative">
      <nav className="secondaryNavContainer bg-white position-absolute w-100 start-0 z-3 border-top ">
        <ul className="secondaryNav d-flex justify-content-between align-items-center list-unstyled">
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Graphics</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
          <li>
            <a href="#">Writing</a>
          </li>
          <li>
            <a href="#">Translation</a>
          </li>
          <li>
            <a href="#">Animation</a>
          </li>
          <li>
            <a href="#">Audio</a>
          </li>
          <li>
            <a href="#">Branding</a>
          </li>
          <li>
            <a href="#">Website</a>
          </li>
          <li>
            <a href="#">Programming</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</>
  )
}

export default Nav