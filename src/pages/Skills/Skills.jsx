import { Link } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import { useState } from "react";
import { request } from "../../utils/axios-utils";
import Sidebar from "../AdminDashBoard/Sidebar";
import useSkills from "../../hooks/useSkills";

function Skills() {
  const {
    data: skillsData,
    isLoading: skillsLoading,
    refetch,
  } = useSkills();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this Skill?")) {
      setDeleting(true);
      try {
        await request({ url: `/Skill/${id}`, method: "Delete" });
        refetch(); // Refetch categories after deletion
      } catch (error) {
        console.error("Error deleting category:", error);
      } finally {
        setDeleting(false);
      }
    }
  };

  if (skillsLoading || deleting) {
    return <Loader />;
  }

  return (
    <div>
      <Sidebar active={"Skills"} />
      <div className="dashboardMain min-vh-100">
        <div>
          <h3
            className="fw-bold textDark300 mb-2"
            style={{ fontSize: "24px", marginTop: "60px" }}
          >
            All Skils
          </h3>

          <div className="overflow-x-auto">
            <div className="w-100">
              <table className="w-100 dashboardTable">
                <thead className="pb-3">
                  <tr>
                    <th scope="col" className="ps-4">
                      Skill Name
                    </th>
                    <th scope="col">Update</th>
                    <th scope="col" className="text-end pe-5">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {skillsData?.data.result.map((skill) => (
                    <tr key={skill.id}>
                      <td>
                        <div className="d-flex gap-3 align-items-center project-name">
                          <div className="rounded-3"></div>
                          <div className="textDark200">{skill.name}</div>
                        </div>
                      </td>
                      <td className="textDark200">
                        <Link
                          className="dashboard-action-btn"
                          to={`/updateSkill/${skill.id}`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 10V15.4C19 17.3882 17.3882 19 15.4 19H4.6C2.61177 19 1 17.3882 1 15.4V4.6C1 2.61177 2.61177 1 4.6 1H10M13.3177 2.82047C13.3177 2.82047 13.3177 4.10774 14.605 5.39501C15.8923 6.68228 17.1795 6.68228 17.1795 6.68228M7.43921 13.5906L10.1425 13.2044C10.5324 13.1487 10.8938 12.968 11.1723 12.6895L18.4668 5.39501C19.1777 4.68407 19.1777 3.53141 18.4668 2.82047L17.1795 1.5332C16.4686 0.822266 15.3159 0.822265 14.605 1.5332L7.31048 8.82772C7.03195 9.10624 6.85128 9.4676 6.79557 9.85753L6.40939 12.5608C6.32357 13.1615 6.83848 13.6764 7.43921 13.5906Z"
                              stroke="#5B5B5B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </Link>
                      </td>
                      <td className="textDark200">
                        <div className="d-flex justify-content-end me-5">
                          <button
                            className="dashboard-action-btn"
                            onClick={() => handleDelete(skill.id)}
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
