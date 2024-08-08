import React, { useState, useEffect } from "react";
import FreeSidebar from "./FreeSideBar";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Loader from "../../components/Loading/Loader";

function UploadCv() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  useEffect(() => {
    // Revoke the object URL to avoid memory leaks
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!file) {
      setUploadError("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5140/api/CV",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseData(response.data);
      setUploadSuccess("File uploaded successfully");
      console.log(response.data);
    } catch (error) {
      setUploadError("File upload failed");
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py110 bg">
      <FreeSidebar active="test" />
      <div className="container dashboardMain" style={{ height: "78vh", marginLeft: "400px" }}>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-grid"
            role="tabpanel"
            aria-labelledby="nav-grid-tab"
            tabIndex={0}
          >
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              <form onSubmit={handleUpload}>
                <div
                  className="d-flex flex-column gap-4 rounded m-5"
                  style={{
                    width: "990px",
                    maxWidth: "1024px",
                    backgroundColor: "var(--white)",
                  }}
                >
                  <div className="gig-info-header">
                    <h4 className="text-18 fw-semibold text-dark-300">
                      Upload CV
                    </h4>
                  </div>

                  <div className="gig-info-body bg-white">
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="form-container">
                          <label htmlFor="cv" className="form-label">
                            Upload CV
                            <span className="text-lime-300">*</span>
                          </label>
                          <div
                            {...getRootProps({ className: "dropzone" })}
                            style={{
                              border: "2px dashed #eeeeee",
                              borderRadius: "4px",
                              padding: "20px",
                              textAlign: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop a PDF file here, or click to select
                              one
                            </p>
                          </div>
                          <div>{file && <p>{file.path}</p>}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {fileUrl && (
                    <div style={{ width: "100%", height: "500px" }}>
                      <iframe
                        src={fileUrl}
                        style={{ width: "100%", height: "500px" }}
                        title="CV Preview"
                      />
                    </div>
                  )}

                  {uploadError && (
                    <div className="alert alert-danger" role="alert">
                      {uploadError}
                    </div>
                  )}
                  {uploadSuccess && (
                    <div className="alert alert-success" role="alert">
                      {uploadSuccess}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-btn-secondary-lg"
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
                </div>
              </form>

              {responseData && (
                <div
                  className="d-flex flex-column gap-4 rounded m-5"
                  style={{
                    width: "990px",
                    maxWidth: "1024px",
                    marginTop: "20px",
                    backgroundColor: "var(--white)",
                    padding: "20px",
                  }}
                >
                  <h4 className="text-18 fw-semibold text-dark-300">
                    CV Details
                  </h4>
                  <p>
                    <strong>Name:</strong> {responseData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {responseData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {responseData.phone}
                  </p>
                  <p>
                    <strong>Skills:</strong> {responseData.skills.join(", ")}
                  </p>
                  <p>
                    <strong>Education:</strong>
                  </p>
                  <ul>
                    {responseData.education.map((edu, index) => (
                      <li key={index}>{edu.name}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Experience:</strong>
                  </p>
                  <ul>
                    {responseData.experience.map((exp, index) => (
                      <li key={index}>
                        {exp.title} at {exp.organization}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-list"
            role="tabpanel"
            aria-labelledby="nav-list-tab"
            tabIndex={0}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UploadCv;
