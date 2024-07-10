// import { Sidebar } from "flowbite-react";
import toast from "react-hot-toast";
import { MdFileUpload } from "react-icons/md";
import Loader from "../../components/Loading/Loader";
import { useFormik } from "formik";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useEffect, useMemo, useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Client() {
  const token = localStorage.getItem("autoToken");
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useUserData(userId);
  console.log(data?.data.result);
  const [oldimage, setOldImage] = useState(null);
  const [image, setImage] = useState(null);

  const [imageName, setImageName] = useState("");

  const pageLoaded = useMemo(
    () => !isLoading && !isError,
    [isLoading, isError]
  );
  useEffect(() => {
    if (data) {
      setOldImage(data?.data.result.imageUrl);
      console.log("image", image);
      formik.setValues({
        // Image : data.data.result.imageUrl || null,
        Name: data?.data.result.name || "",
        PhoneNumber: data?.data.result.phoneNumber || "",
      });
    }
  }, [data]);

  const onDrop = async (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setImageName(uploadedFile.name);
    setImage(uploadedFile);
    setOldImage(null);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 2,
  });

  const updateUser = async (values) => {
    try {
      const form_data = new FormData();
      form_data.append("Name", values.Name);
      form_data.append("Image", image);
      form_data.append("PhoneNumber", values.PhoneNumber);

      const { data } = await axios.put(
        `http://localhost:5140/api/Client/${userId}`,
        form_data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("updated");
      // console.log(data);
      if (data.isSuccess === true) {
        navigate("/");
      }
    } catch (error) {
      toast(error.message);
    }
  };

  let formik = useFormik({
    initialValues: {
      Name: data?.data.result.name || "",
      PhoneNumber: data?.data.result.phoneNumber || "",
    },
    onSubmit: updateUser,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return toast.error(error.message);
  }
  return (
    <div>
      <Sidebar active="editProfile" />
      {pageLoaded && (
        <div className="dashboardMain min-vh-100">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3
                  style={{ fontSize: 24 }}
                  className="fw-bold textDark300 mb-2"
                >
                  Profile Settings
                </h3>
                <ul className="d-flex align-items-center gap-2 p-0">
                  <li className="textDark200 fs-6">Dashboard</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={5}
                      height={11}
                      viewBox="0 0 5 11"
                      fill="none"
                    >
                      <path
                        d="M1 10L4 5.5L1 1"
                        stroke="#5B5B5B"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li className="textLime300 fs-6">Profile Settings</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex flex-column gap-4">
                      <div className="profile-info-card">
                        <div className="profileInfoHeader">
                          <h4 className="text-18 fw-semibold textDark300">
                            Profile Settings
                          </h4>
                        </div>
                        <div className="profileInfoBody bg-white">
                          <div className="d-flex justify-content-center">
                            <label htmlFor="Image" className="form-label">
                              Image
                              <span className="textLime300">*</span>
                            </label>
                            <div
                              {...getRootProps({ className: "dropzone" })}
                              style={{ width: "300px", height: "200px" }}
                            >
                              {image && (
                                <div>
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt={imageName}
                                    style={{
                                      maxWidth: "240px",
                                      maxHeight: "150px",
                                    }}
                                  />
                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4>
                                      Change Photo
                                      <input
                                        {...getInputProps()}
                                        name="Image"
                                        id="Image"
                                      />
                                    </h4>
                                  </div>
                                </div>
                              )}
                              {!image && oldimage && (
                                <div>
                                  <img
                                    src={oldimage}
                                    alt={imageName}
                                    style={{
                                      maxWidth: "240px",
                                      maxHeight: "150px",
                                    }}
                                  />
                                  <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4>
                                      Change Photo
                                      <input
                                        {...getInputProps()}
                                        name="Image"
                                        id="Image"
                                      />
                                    </h4>
                                  </div>
                                </div>
                              )}
                              {!image && !oldimage && (
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                  <MdFileUpload color="#1475cf" size={60} />
                                  <input
                                    {...getInputProps()}
                                    name="Image"
                                    id="Image"
                                  />
                                  <h1>{imageName}</h1>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="row g-4">
                            <div className="col-md-12">
                              <div className="form-container">
                                <label htmlFor="fname" className="form-label">
                                  UserName
                                  <span className="textLime300">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="Name"
                                  value={formik.values.Name}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  name="Name"
                                  className="form-control shadow-none"
                                  placeholder="yourName"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-container">
                                <label htmlFor="phone" className="form-label">
                                  Phone Number
                                  <span className="textLime300">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="PhoneNumber"
                                  name="PhoneNumber"
                                  value={formik.values.PhoneNumber}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  className="form-control shadow-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <button className="wbtnsecondarylg" type="submit">
                          Save
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={10}
                            viewBox="0 0 14 10"
                            fill="none"
                          >
                            <path
                              d="M9 9L13 5M13 5L9 1M13 5L1 5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => navigate(-1)}
                          className="text-danger text-decoration-underline"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
