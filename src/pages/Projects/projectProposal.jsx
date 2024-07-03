import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";

function ProjectProposal() {
  const { projectId } = useParams();
  const token = localStorage.getItem("autoToken");

  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProposalData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5140/api/ProjectProposal/${projectId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log("ProjectProposal", data?.result);
        setProposal(data?.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching proposal data:", error);
        setLoading(false);
      }
    };
    fetchProposalData();
  }, [projectId, token]);

  if (loading) {
    return <div>
        <Loader />
    </div>;
  }

  if (!proposal) {
    return <div>No proposal data available.</div>;
  }

  return (
    <div>
      <h1>Project Proposal</h1>
      {proposal?.map((prop) => (
        <div key={prop.id}>
          <p>ID: {prop.id}</p>
          <p>Created Time: {new Date(prop.createdTime).toLocaleString()}</p>
          <p>Description: {prop.description}</p>
          <p>Price: ${prop.price}</p>
          <p>Deliver Date: {prop.deliverDate}</p>
          <div>
            <h3>Proposal Reply</h3>
            <p>Accepted: {prop.proposalReplay.isAccepted ? "Yes" : "No"}</p>
            <p>Note: {prop.proposalReplay.note}</p>
          </div>
          <p>Freelancer ID: {prop.freelancerId}</p>
          <p>Work ID: {prop.workId}</p>
          <Link to={`/ReplayProposal/${prop.id}`} className="wbtnsecondarylg" style={{width: "200px"}}>
            replay proposal
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectProposal;
