import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";
import logo from "../../Assest/logo.svg";
import { useUserData } from "../../hooks/useUserData";
import { IoWalletOutline, IoSearch } from "react-icons/io5"; // Import IoSearch icon
import { ImCoinEuro } from "react-icons/im";

const Nav = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const userId = localStorage.getItem("user_id");
  const { data } = useUserData(userId);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset >= 250);
    };

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

  const handleSearch = () => {
    // Navigate to search results page with searchQuery as data
    if (searchQuery.trim() !== "") {
      navigate(`/search-results/${searchQuery}`);
    } else {
      // Handle case where search query is empty
      toast.error("Please enter a search term.");
    }
  };

  const navItems = [
    { label: "ALL Project", path: "/projects" },
    { label: "My Dashboard", path: `/Editprofile/${userId}` },
  ];

  return (
    <header
      className={`headerPrimary ${scrolled ? "backgroundscroll-navbar" : ""}`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between">
          <Link to="/">
            <img height={60} width={60} src={logo} alt="Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="d-block d-xl-none">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <button onClick={logout}>Logout</button>
              </li>
              {navItems.map((item, index) => (
                <li key={index} className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${
                      scrolled ? "text-white backgroundscroll-navbar" : ""
                    }`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {token ? (
            <div className="d-flex justify-content-center align-items-center me-3 pe-2 text-nowrap">
              <div className="position-relative me-3">
                <input
                  type="text"
                  className="form-control shadow-none me-3 search-bar" // Apply custom class for styling
                  style={{
                    borderRadius: "999px",
                    border: "solid 0.2px #13544e ",
                    height: "57px",
                    paddingLeft: "50px", // Adjust padding for search icon
                  }}
                  placeholder=" Search..." // Placeholder text for search bar
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IoSearch
                  className="position-absolute top-50 translate-middle-y ms-1"
                  style={{
                    left: "2px",
                    fontSize: "35px",
                    borderRadius: "50%",
                    padding : "5px",
                    color: "#FFF",
                    backgroundColor: "#13544e",
                  }}
                  onClick={handleSearch}
                />
              </div>
              <div>
                {data && data.data && data.data.result && (
                  <Link to={`/profile/${userId}`}>
                    <div
                      className="d-flex justify-content-center align-items-center me-3 pe-2"
                      style={{
                        border: "solid 0.5px #13544e ",
                        borderRadius: "99999px",
                        padding: "4px",
                        gap: "10px",
                        color: "#13544e",
                        backgroundColor: "#fff",
                      }}
                    >
                      <img
                        src={data.data.result.imageUrl}
                        alt="User Avatar"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="m-0">{data.data.result.name},</p>
                      <p className="m-0">
                        <ImCoinEuro style={{ width: "50px", height: "30px" }} />
                        {data.data.result.balance}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
              <button onClick={logout} className="wbtnsecondarylg fw-bold">
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-right d-flex align-items-center gap-4">
              <Link
                to="/signin"
                className="headerBtn d-none d-lg-flex align-items-center"
              >
                <svg
                  className="me-2"
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
                Signin
              </Link>
              <Link
                to="/clientsignup"
                className="headerBtn d-none d-lg-flex align-items-center"
              >
                <svg
                  className="me-2"
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
                Signup
              </Link>
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
  );
};

export default Nav;
