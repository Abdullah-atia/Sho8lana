import { Navigate } from "react-router-dom";
// import { AdminContext } from "../../Context/AdminContext";
// import { useContext } from "react";

function AdminProdected({ children }) {
//   const { isAdmin } = useContext(AdminContext);
  if (localStorage.getItem("autoToken") === null) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <>{children}</>;
}

export default AdminProdected;
