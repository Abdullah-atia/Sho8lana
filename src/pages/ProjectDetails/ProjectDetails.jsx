import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Loader from "../../components/Loading/Loader";

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
          `http://localhost:5140/api/Project/${projectId}:int`
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: "#f7f5f0", paddingTop: "100px" }}
    >
      <div className="container">
        <div className="gig-info-header">
          <h4 className="text-18 fw-semibold text-dark-300">
            Project Information
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2
                className="fw-bold textDark300 mb-2  mb-3"
                style={{ fontSize: "24px" }}
              >
                Project Title:{project?.title}
              </h2>

              {error ? (
                <p className="text-danger">
                  Error fetching project details: {error.message}
                </p>
              ) : (
                project && (
                  <div>
                    <p> <span style={{fontSize:"24px" , fontWeight:"bold"}}>Description</span>: {project.description}</p>
                    <p>Start Date: {project.startDate}</p>
                    <p>Expected Budget: {project.expectedBudget}</p>
                    <p>
                      Duration: {project.expectedDuration.days} days,{" "}
                      {project.expectedDuration.months} months
                    </p>
                    <div>
                      <h3>Skills:</h3>
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
            </div>
          </div>
        </div>

        {client && (
          <div className="row justify-content-center mt-4">
            <div className="col-xl-12">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="fw-bold textDark300 mb-2">Client Information</h4>
                <p>{client.name}</p>
                {/* Render other client data as needed */}
              </div>
            </div>
          </div>
        )}

        <div className="row justify-content-center mt-4">
          <div className="col-xl-12">
            <button className="wbtnsecondarylg">
              <Link
                to={`/PropasalForm/${projectId}`}
                className="text-white p-1"
              >
                Send Proposal <FaArrowRightLong />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
