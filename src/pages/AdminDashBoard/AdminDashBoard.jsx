import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { request } from "../../utils/axios-utils";
import { RiDeleteBin6Line } from "react-icons/ri";
import Loader from "../../components/Loading/Loader";
import users from "./../../Assest/admin/users.png"
import skills from "./../../Assest/admin/skills.png";
import Categories from "./../../Assest/admin/category.png";
import task from "./../../Assest/admin/project.png";



function AdminDashBoard() {
  const [projects, setProjects] = useState([]);
  const [deleting, setDeleting] = useState(false);

  function fetchProjects() {
    return request({ url: "/Project" });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchProjects();
        //  console.log(response.data.result)
        setProjects(response.data.result);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setDeleting(true);
      try {
        await request({ url: `/Project/${id}`, method: "Delete" });
        
      } catch (error) {
        console.error("Error deleting category:", error);
      } finally {
        setDeleting(false);
      }
    }
  };
  if ( deleting) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <Sidebar active={"dashboard"} />
      </div>

      <div className="dashboardMain min-vh-100">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex gap-4 flex-column flex-md-row align-items-md-center justify-content-between">
            <div>
              <h3
                style={{ fontSize: 24 }}
                className=" fw-bold textDark300 mb-2 "
              >
                Dashboard
              </h3>
              <ul className="d-flex align-items-center gap-2 p-0">
                <li className="textDark200 fs-6">Dashboard</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                <div>
                  <h3 style={{ fontSize: 32 }} className=" fw-bold textDark300">
                    4 project
                  </h3>
                  <p style={{ fontSize: 18 }} className=" textDark200">
                    Total PRoject
                  </p>
                </div>
                <div
                  style={{
                    // backgroundColor: "var(--green-300)",
                    borderRadius: 8,
                    padding: 10,
                  }}
                >
                  <img
                    style={{ width: "85px", height: "70px" }}
                    src={task}
                    alt="projects"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                <div>
                  <h3 style={{ fontSize: 32 }} className=" fw-bold textDark300">
                    30 user
                  </h3>
                  <p style={{ fontSize: 18 }} className=" textDark200">
                    Total User
                  </p>
                </div>
                <div
                  style={{
                    // backgroundColor: "var(--green-300)",
                    borderRadius: 8,
                    padding: 10,
                  }}
                >
                  <img
                    src={users}
                    style={{ width: "85px", height: "70px" }}
                    alt="users"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                <div>
                  <h3 style={{ fontSize: 32 }} className=" fw-bold textDark300">
                    25 Category
                  </h3>
                  <p style={{ fontSize: 18 }} className=" textDark200">
                    Total Category
                  </p>
                </div>
                <div
                  style={{
                    // backgroundColor: "var(--green-300)",
                    borderRadius: 8,
                    padding: 10,
                  }}
                >
                  <img
                    style={{ width: "75px", height: "74px" }}
                    src={Categories}
                    alt="Categories"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
                <div>
                  <h3 style={{ fontSize: 32 }} className=" fw-bold textDark300">
                    40 Skill
                  </h3>
                  <p style={{ fontSize: 18 }} className=" textDark200">
                    Total skill
                  </p>
                </div>
                <div
                  style={{
                    // backgroundColor: "white",

                    borderRadius: 8,
                    padding: 10,
                  }}
                >
                  <img
                    style={{ width: "100px", height: "75px" }}
                    src={skills}
                    alt="skills"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div>
            <h3 style={{ fontSize: 24 }} className="fw-bold textDark300 mb-2">
              All Projects
            </h3>
            {/* Table */}
            <div className="overflow-x-auto">
              <div className="w-100">
                <table className="w-100 dashboardTable">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                      <th scope="col">Budget</th>
                      {/* <th scope="col">Status</th> */}
                      <th scope="col">Days</th>
                      <th scope="col" className="text-end pe-5">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* list */}
                    {projects.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex gap-3 align-items-center project-name">
                              <div className="rounded-3">
                                <img
                                  src="assets/img/dashboard/projects/1.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p className="textDark200">{item.title}</p>
                              </div>
                            </div>
                          </td>
                          <td className="textDark200">
                            {item.expectedBudget} $
                          </td>
                          {/* <td>
                            <span className="status-badge pending">
                              {" "}
                              Close{" "}
                            </span>
                          </td> */}
                          <td className="textDark200">
                            {item.expectedDuration.days}
                          </td>
                          <td>
                            <div className="d-flex justify-content-end gap-2">
                              <button className="dashboard-action-btn">
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                                    stroke="#5B5B5B"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                              <button
                                className="dashboard-action-btn"
                                onClick={() => handleDelete(item.id)}
                              >
                                <RiDeleteBin6Line size={24} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;

function Card() {
  return (
    <div className="d-flex  flex-row justify-content-between p-4 bg-light w-25 rounded border border-dark m-2 ">
      <div>
        <h1 style={{ fontSize: "24px" }}>50</h1>
        <p className="text-secondary">Total jobs</p>
      </div>
      <div>
        <img src="./assets/categories/icon-2.png" alt="jobs" />
      </div>
    </div>
  );
}
