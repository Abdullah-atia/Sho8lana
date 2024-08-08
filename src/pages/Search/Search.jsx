import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import { useEffect, useState } from "react";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const searchTerm = query.get("q");

  const [clients, setClients] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("autoToken");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [clientsResponse, freelancersResponse, projectsResponse] =
          await Promise.all([
            axios.get(`http://localhost:5140/api/Client/search/${searchTerm}`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            axios.get(
              `http://localhost:5140/api/Freelancer/search/${searchTerm}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            ),
            axios.get(`http://localhost:5140/api/Project/${searchTerm}`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        setClients(clientsResponse?.data.result);
        setFreelancers(freelancersResponse?.data.result);
        setProjects(projectsResponse?.data.result);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [token, searchTerm]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" bg h-100vh">
      {projects.length > 0 && (
        <div
          className="dashboardMain"
          style={{ marginRight: "50px", marginLeft: "20px" }}
        >
          <div>
            <h3
              className="fw-bold textDark300 mb-2"
              style={{ fontSize: "24px", marginTop: "60px" }}
            >
              All Projects with name {searchTerm}
            </h3>
            <div className="overflow-x-auto">
              <div className="w-100">
                <table className="w-100 dashboardTable">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Project Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex gap-3 align-items-center project-name">
                            <Link
                              to={`/projectdetails/${item.id}`}
                              className="textDark200"
                            >
                              {item.title}
                            </Link>
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
      )}

      {clients.length > 0 && (
        <div
          className="dashboardMain"
          style={{ marginRight: "50px", marginLeft: "20px" }}
        >
          <div>
            <h3
              className="fw-bold textDark300 mb-2"
              style={{ fontSize: "24px", marginTop: "60px" }}
            >
              All Clients
            </h3>
            <div className="overflow-x-auto">
              <div className="w-100">
                <table className="w-100 dashboardTable">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Clients Name with name {searchTerm}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex gap-3 align-items-center project-name">
                            <div className="rounded-3">
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                width={115}
                                height={95}
                              />
                            </div>
                            <Link
                              to={`/clientdetails/${item.id}`}
                              className="textDark200"
                            >
                              {item.name}
                            </Link>
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
      )}

      {freelancers.length > 0 && (
        <div
          className="dashboardMain"
          style={{ marginRight: "50px", marginLeft: "20px" }}
        >
          <div>
            <h3
              className="fw-bold textDark300 mb-2"
              style={{ fontSize: "24px", marginTop: "60px" }}
            >
              All Freelancers with name {searchTerm}
            </h3>
            <div className="overflow-x-auto">
              <div className="w-100">
                <table className="w-100 dashboardTable">
                  <thead className="pb-3">
                    <tr>
                      <th scope="col" className="ps-4">
                        Freelancers Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {freelancers.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex gap-3 align-items-center project-name">
                            <div className="rounded-3">
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                width={115}
                                height={95}
                              />
                            </div>
                            <Link
                              to={`/freelancerdetails/${item.id}`}
                              className="textDark200"
                            >
                              {item.name}
                            </Link>
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
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;
