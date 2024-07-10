import { Link } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import { useEffect, useState } from "react";
import Sidebar from "../AdminDashBoard/Sidebar";
import axios from "axios";

function Users() {
 const [clients, setClients] = useState([]);
 const [freelancers, setFreelancers] = useState([]);

 const [loading, setLoading] = useState(true); // Add loading state
 const [error, setError] = useState(null);
const token = localStorage.getItem("autoToken")
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       setDeleting(true);
//       try {
//         await request({ url: `/Category/${id}`, method: "Delete" });
//         refetch(); // Refetch categories after deletion
//       } catch (error) {
//         console.error("Error deleting category:", error);
//       } finally {
//         setDeleting(false);
//       }
//     }
//   };
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:5140/api/Client", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response?.data.result);
        setClients(response?.data.result);
      } catch (error) {
        setError("Error fetching clients");
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5140/api/Freelancer",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("free", response?.data.result);
        setFreelancers(response?.data.result);
      } catch (error) {
        setError("Error fetching freelancers");
        console.error("Error fetching freelancers:", error);
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };
    fetchFreelancers()
    fetchClients();
  }, [token]);
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Sidebar active={"users"} />
      <div className="dashboardMain">
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
                      Clients Name
                    </th>
                    <th scope="col" className="text-end pe-5">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clients?.map((item) => (
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
                          <div className="textDark200">{item.name}</div>
                        </div>
                      </td>
                      <td className="textDark200">
                        <div className="d-flex justify-content-end me-5">
                          <button
                            className="dashboard-action-btn"
                            // onClick={() => handleDelete(category.id)}
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
      <div className="dashboardMain ">
        <div>
          <h3
            className="fw-bold textDark300 mb-2"
            style={{ fontSize: "24px", marginTop: "60px" }}
          >
            All Freelancers
          </h3>

          <div className="overflow-x-auto">
            <div className="w-100">
              <table className="w-100 dashboardTable">
                <thead className="pb-3">
                  <tr>
                    <th scope="col" className="ps-4">
                      freelancers Name
                    </th>
                    <th scope="col" className="text-end pe-5">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {freelancers?.map((item) => (
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
                          <div className="textDark200">{item.name}</div>
                        </div>
                      </td>
                      <td className="textDark200">
                        <div className="d-flex justify-content-end me-5">
                          <button
                            className="dashboard-action-btn"
                            // onClick={() => handleDelete(category.id)}
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

export default Users;
