import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import FreeSidebar from "./FreeSideBar";

function CommingProposal() {
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("autoToken");
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProposalData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5140/api/JobProposal/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        const proposalsWithFreelancers = await Promise.all(
          data?.result?.map(async (proposal) => {
            const freelancerResponse = await fetch(
              `http://localhost:5140/api/Freelancer/${proposal.freelancerId}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const freelancerData = await freelancerResponse.json();
            return { ...proposal, freelancer: freelancerData?.result };
          })
        );
        setProposals(proposalsWithFreelancers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching proposal data:", error);
        setLoading(false);
      }
    };
    fetchProposalData();
  }, [userId, token]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!proposals.length) {
    return <div>No proposal data available.</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8, mt: 5 }}>
      <FreeSidebar active="proposal" />
      <Typography variant="h4" component="h1" gutterBottom>
        Proposal Details
      </Typography>
      <Grid container spacing={4}>
        {proposals.map((proposal) => (
          <Grid item key={proposal.id} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "16px" }}>
              <CardHeader
                variant="h3"
                title="Proposal"
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
                {proposal.freelancer ? (
                  <Link
                    to={`/freelancer/${proposal.freelancer.id}`}
                    style={{ color: "#888" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img
                        src={proposal.freelancer.imageUrl}
                        style={{ width: "50px", borderRadius: "50%" }}
                        alt={proposal.freelancer.name}
                      />
                      <Typography color="text.secondary"></Typography>
                      <Typography>{proposal.freelancer.name}</Typography>
                    </Box>
                  </Link>
                ) : (
                  <Typography>Loading freelancer data...</Typography>
                )}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography color="text.secondary">Work ID:</Typography>
                  <Typography>{proposal.workId}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    to={`/ReplayProposalJob/${proposal.id}`}
                    className="wbtnsecondarylg"
                    style={{ width: "200px" }}
                  >
                    Replay Proposal
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

export default CommingProposal;
