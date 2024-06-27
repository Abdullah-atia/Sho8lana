import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [client, setClient] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5140/api/Project/${projectId}`
        );
        const projectData = response.data.result;
        setProject(projectData);
        console.log(projectData.clientId);

        if (projectData.clientId) {
          fetchUser(projectData.clientId);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching project data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchUser = async (clientId) => {
      try {
        const response = await axios.get(
          `http://localhost:5140/api/client/${clientId}`
        );
        setClient(response.data.result);
        console.log("Client:", response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching user data:", err);
      }
    };

    fetchProject();
  }, [projectId]);

  return (
    <div>
      <h1>Project Title: {project?.title}</h1>
      {isLoading ? (
        <p>Loading project details...</p>
      ) : error ? (
        <p>Error fetching project details: {error.message}</p>
      ) : (
        project && (
          <div>
            <p>Description: {project.description}</p>
            <p>Start Date: {project.startDate}</p>
            <p>Expected Budget: {project.expectedBudget}</p>
            <p>
              Duration: {project.expectedDuration.days} days,{" "}
              {project.expectedDuration.months} months
            </p>
            {/* <p>Category: {project.category.name}</p> */}
            <div>
              <p>Skills:</p>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
            <p>{project.description}</p>
          </div>
        )
      )}
      {client && (
        <div>
          <h2>Client Information</h2>
          <p>{client.name}</p>
          {/* Render other client data as needed */}
        </div>
      )}
      <button className="wbtnsecondarylg">
        <Link to={`/PropasalForm/${projectId}`} className="text-white p-1">
          Send Proposal <FaArrowRightLong />
        </Link>
      </button>
    </div>
  );
}

export default ProjectDetails;
