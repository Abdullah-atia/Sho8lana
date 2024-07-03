import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyProject() {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("autoToken");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5140/api/Project/freelancer/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.isSuccess) {
            return Promise.all(
              data.result.map((projectId) =>
                fetch(`http://localhost:5140/api/Project/${projectId}:int`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }).then((response) => response.json())
              )
            );
          } else {
            throw new Error("Failed to fetch project IDs");
          }
        })
        .then((projectsData) => {
          const projects = projectsData.map((data) => data.result);
          setProjects(projects);
        })
        .catch((error) => console.error("Error fetching projects:", error));
    }
  }, [userId, token]);

  return (
    <div className="py110 bg">
      <div className="container">
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
              {projects.map((item, index) => (
                <article className="col mb-4" key={index}>
                  <div className="swiperSlide">
                    <div className="serviceCard bg-white">
                      <div className="position-relative">
                        {/* <img src="./assets/service/1.png" height={180} className="viewCardImg w-100" alt="" /> */}
                        <Link
                          to={`/ProjectDetails/${item.id}`}
                          className="serviceCardBtn"
                        >
                          View
                        </Link>
                      </div>
                      <div className="serviceCardContent">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="serviceCardPrice fw-bold">
                              ${item.expectedBudget}
                            </h3>
                          </div>
                        </div>
                        <Link to={`/ProjectDetails/${item.id}`}>
                          <h3 className="serviceTitle fw-semibold">
                            {item.title}
                          </h3>
                        </Link>

                        <div className="d-flex align-items-center serviceCardOwner">
                          <Link
                            to={`/job/${item.id}`}
                            className="wbtnsecondarylg"
                          >
                            Create SubProject
                          </Link>
                          {/* {clients[item.clientId] && (
                            <>
                              <img
                                src={clients[item.clientId].imageUrl}
                                className="serviceCardOwnerImg"
                                alt={clients[item.clientId].name}
                              />
                              <Link
                                to={`/profile/${clients[item.clientId].id}`}
                                className="serviceCardOwnerName"
                              >
                                {clients[item.clientId].name}
                              </Link>
                            </>
                          )} */}
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
      </div>
    </div>
  );
}

export default MyProject;
