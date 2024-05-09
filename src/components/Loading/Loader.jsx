import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <HashLoader color="#22be0d" speedMultiplier={2} />
    </div>
  );
}
