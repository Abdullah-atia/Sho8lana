import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../../components/Loading/Loader";

export default function ProjectDetails() {
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
        console.log("project", projectData);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ backgroundColor: "#f7f5f0", minHeight: "100vh" }}>
      <Container className="mt-4">
        <Row>
          <Col md={8} className="mx-auto mt-5">
            <Grid
              container
              spacing={3}
              sx={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h4" component="h1" gutterBottom>
                  {project.title || "Website Redesign"}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {project.description ||
                    "Redesign the company's website to improve user experience and increase conversions."}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" className="font-weight-bold">
                  Start Date
                </Typography>
                <Typography variant="body1">
                  {project.startDate || "N/A"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" className="font-weight-bold">
                  Expected Budget
                </Typography>
                <Typography variant="body1">
                  {project.budget ? `$${project.budget}` : "N/A"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" className="font-weight-bold">
                  Duration
                </Typography>
                <Typography variant="body1">
                  {`${project.expectedDuration.months} Months / ${project.expectedDuration.days} Days` ||
                    "N/A"}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" className="font-weight-bold">
                  Required Skills
                </Typography>
                <List>
                  {project.skills ? (
                    project.skills.map((skill, index) => (
                      <ListItem key={index}>
                        <p className="singleSkill">{skill.name}</p>
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>None specified</ListItem>
                  )}
                </List>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  className="font-weight-bold"
                  sx={{ fontWeight: "600" }}
                >
                  Client Info
                </Typography>
                <div className="d-flex align-items-center">
                  <Avatar src="/placeholder-user.jpg" className="mr-3" />
                  <div className="ps-2">
                    <Typography variant="body1" className="font-weight-bold">
                      {client.name || "Acme Inc."}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      E-mail: {client.email || "example@example.com"}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} container justifyContent="space-between">
                <Grid item xs={4}>
                  <Link to="/projects" className="wbtnsecondarylg">
                    Back
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link
                    to={`/PropasalForm/${projectId}`}
                    className="wbtnsecondarylg"
                  >
                    Send Proposal
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
