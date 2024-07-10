import React, { useState, useEffect } from "react";
import FreeSidebar from "./FreeSideBar";
import { useDropzone } from "react-dropzone";

function UploadCv() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

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

  return (
    <div className="py110 bg">
      <FreeSidebar active="test" />
      <div style={{ height: "78vh" }} className="container dashboardMain">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-grid"
            role="tabpanel"
            aria-labelledby="nav-grid-tab"
            tabIndex={0}
          >
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              <form>
                <div
                  className="d-flex flex-column gap-4 rounded"
                  style={{
                    width: "990px",
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

                  <button type="submit" className="w-btn-secondary-lg">
                    Upload
                  </button>
                </div>
              </form>
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
