import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Proposal Details
      </Typography>
      <Grid container spacing={4}>
        {proposal.map((proposal) => (
          <Grid item key={proposal.id} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "16px" }}>
              <CardHeader
                title={`Proposal ${proposal.id}`}
                titleTypographyProps={{ align: "center" }}
                sx={{ backgroundColor: "rgba(34,190,13,0.2)" }}
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Created:</Typography>
                  <Typography>{proposal.createdTime}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Description:</Typography>
                  <Typography>{proposal.description}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Price:</Typography>
                  <Typography>$ {proposal.price}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Deliver By:</Typography>
                  <Typography>{proposal.deliverDate}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Freelancer ID:</Typography>
                  <Typography>{proposal.freelancerId}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Work ID:</Typography>
                  <Typography>{proposal.workId}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    to={`/ReplayProposal/${proposal.id}`}
                    className="wbtnsecondarylg"
                    style={{ width: "200px" }}
                  >
                    Reply Proposal
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default ProjectProposal;
