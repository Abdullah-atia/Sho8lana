import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth"; // Ensure this matches the export

function Nav() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const savedToken = localStorage.getItem("autoToken");
  //   if (savedToken) {
  //     setToken(savedToken);
  //   }
  // }, [setToken]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = (e) => {
    e.preventDefault();
    toast("Logout", { icon: "👏" });
    setToken(null);
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    // <>
      <header
        className={` ${scrolled ? "headerPrimary bg-danger" : "headerPrimary"}`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-xl justify-content-between">
            <Link to="/">
              <img height={50} width={40} src="./logo.svg" alt="Logo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="d-block d-xl-none">
                  <div className="logo">
                    <Link to="/">
                      <img src="./logo.svg" alt="Logo" />
                    </Link>
                  </div>
                  <button onClick={logout}>Logout</button>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <div className="dropdown-menu">
                    <div className="d-flex flex-column flex-xl-row">
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/" className="dropdown-item">
                            <span>Home Main</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/home-two" className="dropdown-item">
                            <span>Home Two</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Freelancer
                  </Link>
                  <div className="dropdown-menu">
                    <div className="d-flex flex-column flex-xl-row">
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/freelancers" className="dropdown-item">
                            <span>Freelancers</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/freelancer-details"
                            className="dropdown-item"
                          >
                            <span>Freelancer Details</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/services" className="dropdown-item">
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details" className="dropdown-item">
                        <span>Service Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/job-posts" className="dropdown-item">
                        <span>Job Post</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/job-details" className="dropdown-item">
                        <span>Job Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/seller-dashboard" className="dropdown-item">
                        <span>Seller Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/buyer-dashboard" className="dropdown-item">
                        <span>Buyer Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/buyer-details" className="dropdown-item">
                        <span>Buyer Details</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions" className="dropdown-item">
                        <span>Terms and Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faqs" className="dropdown-item">
                        <span>Faq</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy" className="dropdown-item">
                        <span>Privacy and Policy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="dropdown-item">
                        <span>Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/404" className="dropdown-item">
                        <span>404 Page</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin" className="dropdown-item">
                        <span>Signin Page</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        <span>Signup Page</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/blogs" className="dropdown-item">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="dropdown-item">
                        <span>Blog Details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {token ? (
              <div>
                <button onClick={logout} className="wbtnsecondarylg fw-bold">
                  Logout
                </button>
              </div>
            ) : (
              <div className="navbar-right d-flex align-items-center gap-4">
                <div className="align-items-center d-none d-lg-flex">
                  <Link to="/signin" className="headerBtn">
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
                  </Link>
                </div>
                <button
                  className="navbar-toggler d-block d-xl-none shadow-none border-0"
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
            )}
          </nav>
        </div>
      </header>
    // </>
  );
}

export default Nav;
