import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../Profile/Sidebar";

function ClientProject() {
  const { userId } = useParams();
  const token = localStorage.getItem("autoToken");
  const [clientData, setClientData] = useState(null);
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch(`http://localhost:5140/api/Client/${userId}`);
        const data = await response.json();
        console.log("client", data.result)
        setClientData(data?.result);
        fetchProjectDetails(data?.result.projectsId);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    const fetchProjectDetails = async (projectIds) => {
      try {
        const projectDetailsPromises = projectIds.map(async (projectId) => {
          const response = await fetch(
            `http://localhost:5140/api/Project/${projectId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return response.json();
        });
        const projectsData = await Promise.all(projectDetailsPromises);
        console.log(projectDetails)
        setProjectDetails(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchClientData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sidebar active="myProject" />
      <div className="dashboardMain min-vh-100">
        <div className="mt-4">
          <div className="gig-info-header mt-5">
            <h2 >Projects</h2>
          </div>
          <div className="container mt-3">
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              {projectDetails.map((project, index) => (
                <div
                  className="serviceCard bg-white  col mb-4 me-3 p-3"
                  key={index}
                >
                  <h3 className="mb-3">Project {index + 1}</h3>
                  <Link to={`/ProjectProposal/${project?.result.id}`}>
                    <p
                      style={{
                        color: "#06131c",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Name : 
                      <span
                        style={{
                          color: "#5b5b5b",
                          fontSize: "18px",
                          fontWeight: "normal",
                        }}
                      >
                        {project?.result.title}
                      </span>
                    </p>
                  </Link>
                  <p
                    style={{
                      color: "#06131c",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Description :
                     <span style={{
                          color: "#5b5b5b",
                          fontSize: "18px",
                          fontWeight: "normal",
                        }}> {project?.result.description}</span>
                  </p>
                  {/* Render other project details as needed */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientProject;
