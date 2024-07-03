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
            `http://localhost:5140/api/Project/${projectId}:int`,
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
      <div style={{ marginTop: "100px", marginLeft: "300px" }}>
        <div className="mt-4">
          <h2>Projects</h2>
          {projectDetails.map((project, index) => (
            <div key={index}>
              <h3>Project {index + 1}</h3>
              <Link to={`/ProjectProposal/${project?.result.id}`}>Name: {project?.result.title}</Link>
              <p>Description: {project?.result.description}</p>
              {/* Render other project details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientProject;
