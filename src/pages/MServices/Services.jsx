import { useEffect, useState } from "react";
import Loader from "../../components/Loading/Loader";

function Services() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(10); 
  const [totalPages, setTotalPages] = useState(1); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:5140/api/Project`
        );
        const data = await response.json();
        setProject(data.result);
        setTotalPages(Math.ceil(data.totalCount / projectPerPage)); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage, projectPerPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py110 bg">
      <div className="container">
        <div className="row justify-content-between mb-40">
          <div className="col-xl-auto">
            <div className="d-flex flex-wrap gap-3">
              {/* Category */}
              <Dropdown title="All Categories">Dropdown items</Dropdown>
              {/* Sub Category */}
              <Dropdown title="Sub Categories">Dropdown items</Dropdown>
              {/* Budget */}
              <Dropdown title="Budget">
                <div className="p-3 py-2">
                  <input type="range" className="form-range shadow-none" />
                  <div className="d-flex">
                    <p className="text-dark-200">$15.00</p>-
                    <p className="text-dark-200">$1800.00</p>
                  </div>
                </div>
              </Dropdown>
              {/* Rating */}
              <Dropdown title="Rating">{/* Rating items */}</Dropdown>
            </div>
          </div>
          <div className="col-xl-auto col-md-7 mt-4 mb-4 mt-xl-0">
            <div className="d-inline-flex justify-content-lg-end gap-3 bg-white rounded-2 py-2 px-4 pe-2">
              <div className="d-flex align-items-center gap-2">
                <label className="flex-shrink-0">Sort By:</label>
                <select className="select-dropdown border-0 bg-offWhite shadow-none">
                  <option value={0}>Most Relevant</option>
                  <option value={1}>Top Seller</option>
                </select>
              </div>
              <nav>
                <div
                  className="freelancer-tab-nav d-flex gap-3 align-items-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="freelancer-tab-link active"
                    id="nav-grid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-grid"
                    type="button"
                    role="tab"
                    aria-controls="nav-grid"
                    aria-selected="true"
                  >
                    Grid
                  </button>
                  <button
                    className="freelancer-tab-link"
                    id="nav-list-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-list"
                    type="button"
                    role="tab"
                    aria-controls="nav-list"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    List
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-grid"
            role="tabpanel"
            aria-labelledby="nav-grid-tab"
            tabIndex={0}
          >
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              {project.map((item, index) => (
                <article className="col mb-4" key={index}>
                  <div className="swiperSlide">
                    <div className="serviceCard bg-white">
                      <div className="position-relative">
                        {/* <img src="./assets/service/1.png" height={180} className="viewCardImg w-100" alt="" /> */}
                        <button className="serviceCardBtn">View</button>
                      </div>
                      <div className="serviceCardContent">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="serviceCardPrice fw-bold">
                              ${item.expectedBudget}
                            </h3>
                          </div>
                        </div>
                        <h3 className="serviceTitle fw-semibold">
                          <a href="#">{item.title}</a>
                        </h3>
                        <div className="d-flex align-items-center serviceCardOwner">
                          <img className="serviceCardOwnerImg" alt="" />
                          <a href="#" className="serviceCardOwnerName">
                            Nankathan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-list"
            role="tabpanel"
            aria-labelledby="nav-list-tab"
            tabIndex={0}
          >
            {/* List View */}
          </div>
        </div>
        {/* Pagination */}
        {/* <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <nav aria-label="Page navigation example">
              <ul className="custom-pagination pagination">
                <li className="custom-page-item page-item">
                  <button
                    className="custom-page-link page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(5)].map((_, i) => (
                  <li
                    key={i}
                    className={`custom-page-item page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="custom-page-link page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className="custom-page-item page-item">
                 
                  <button className="custom-page-link page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>
    </div>
  );
}

function Dropdown({ title, children }) {
  return (
    <div className="custom-dropdown dropdown">
      <button
        className="custom-dropdown-toggle dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="custom-dropdown-menu dropdown-menu">{children}</ul>
    </div>
  );
}

export default Services;
