import { useEffect, useState } from "react";
import { request } from "../../utils/axios-utils";
import { Link, useParams } from "react-router-dom";
import FreeSidebar from "./FreeSideBar";

function CreatdJobByProject() {
  const {projectId} = useParams();
  const [jobs, setJobs] = useState([]);

  function fetchJobs() {
    return request({ url: `/Job/${projectId}` });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchJobs();
        console.log(response);
        setJobs(response.data.result);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchData();
  }, [projectId]);

  return (
    <div className="py110 bg">
      <FreeSidebar active="test" />
      <div style={{ height: "78vh" }} className="container dashboardMain ">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-grid"
            role="tabpanel"
            aria-labelledby="nav-grid-tab"
            tabIndex={0}
          >
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              {jobs.map((item, index) => (
                <article className="col mb-4" key={index}>
                  <div className="swiperSlide">
                    <div className="serviceCard bg-white">
                      <div className="position-relative">
                        {/* <img src="./assets/service/1.png" height={180} className="viewCardImg w-100" alt="" /> */}
                        <Link
                          to={`/ProjectDetails/${item.projectId}`}
                          className="serviceCardBtn"
                        >
                          View Full Project
                        </Link>
                      </div>
                      <div className="serviceCardContent">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="serviceCardPrice fw-bold">
                              ${item.price}
                            </h3>
                          </div>
                        </div>
                        <Link to={`/jobProposal/${item.id}`}>
                          <h3 className="serviceTitle fw-semibold">
                            {item.description}
                          </h3>
                        </Link>
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

export default CreatdJobByProject;
