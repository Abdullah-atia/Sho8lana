import React, { useContext } from "react";
import { AuthContext } from "../../Context/Auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  if (token === null && localStorage.getItem("autoToken") === null) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
}
