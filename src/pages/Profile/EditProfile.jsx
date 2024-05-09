import React, { useEffect, useState, useMemo } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useUpdateUser, useUserData } from "../../hooks/useUserData";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
// import { request } from "../../utils/axios-utils";
import useCategory from "../../hooks/useCategory";
import useSkills from "../../hooks/useSkills";
import Loader from "../../components/Loading/Loader";

function EditProfile() {
  const { userId } = useParams();
  const { data, isLoading, isError, error } = useUserData(userId);
  const queryClient = useQueryClient();
  const { mutate: updateUser } = useUpdateUser();
  const [image, setImage] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      imageUrl: "",
      phoneNumber: 0,
      categoryId: 0,
      skillsId: [],
    },
  });
  const userSkillsIds = data?.data.result.skills.map((skill) => skill.id);

  const { data: categoryData, isLoading: categoryLoading } = useCategory();
  const { data: skillsData, isLoading: skillsLoading } = useSkills();

  const pageLoaded = useMemo(
    () => !isLoading && !isError && !categoryLoading && !skillsLoading,
    [isLoading, isError, categoryLoading, skillsLoading]
  );

  useEffect(() => {
    if (data && data.data && data.data.result) {
      const { name, email, imageUrl, phoneNumber, categoryId, skills } =
        data.data.result;
      setValue("name", name);
      setValue("email", email);
      setValue("imageUrl", imageUrl);
      setValue("phoneNumber", phoneNumber);
      setValue("categoryId", categoryId);
      setValue("skillsId", skills);
    }
  }, [data, setValue]);
  //   console.log(getValues());

  const onDrop = async (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setImage(uploadedFile);
  };
  const handleSkillChange = (selectedSkillIds) => {
    setSelectedSkills(selectedSkillIds);
  };

  const onSubmit = async (data) => {
    const newData = { ...data, image };
    console.log(newData);

    try {
      const response = updateUser(userId, newData);
      queryClient.invalidateQueries(["user", userId]);
      console.log("update data", response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  if (isLoading || categoryLoading || skillsLoading) {
    return <Loader />;
  }
  if (isError) {
    return toast.error(error.message);
  }
  return (
    <div>
      {pageLoaded && (
        <div className="dashboardMain min-vh-100">
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3
                  style={{ fontSize: 24 }}
                  className=" fw-bold textDark300 mb-2"
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex flex-column gap-4">
                      <div className="profile-info-card">
                        <div className="profileInfoHeader">
                          <h4 className="text-18 fw-semibold textDark300">
                            Profile Settings
                          </h4>
                        </div>
                        <div className="profileInfoBody bg-white">
                          <div className="row g-4">
                            <div className="col-md-12">
                              <div className="form-container">
                                <label htmlFor="fname" className="form-label">
                                  UserName
                                  <span className="textLime300">*</span>
                                </label>
                                <input
                                  type="text"
                                  {...register("name")}
                                  className="form-control shadow-none"
                                  placeholder="yourName"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-container">
                                <label htmlFor="email" className="form-label">
                                  Email Address
                                  <span className="textLime300">*</span>
                                </label>
                                <input
                                  type="text"
                                  {...register("email")}
                                  className="form-control shadow-none"
                                  placeholder="example@email.com"
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
                                  id="phone"
                                  {...register("phoneNumber")}
                                  className="form-control shadow-none"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-container">
                                <label
                                  htmlFor="category"
                                  className="form-label"
                                >
                                  Categories
                                  <span className="textLime300">*</span>
                                </label>
                                <select
                                  className="form-select shadow-none"
                                  {...register("categoryId")}
                                  defaultValue={getValues("categoryId")}
                                >
                                  {categoryData &&
                                    categoryData?.data?.result?.map(
                                      (category) => (
                                        <option
                                          key={category.id}
                                          value={category.id}
                                        >
                                          {category.name}
                                        </option>
                                      )
                                    )}
                                </select>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-container">
                                <label htmlFor="skills" className="form-label">
                                  MySkills
                                  <span className="textLime300">*</span>
                                </label>

                                <Autocomplete
                                  multiple
                                  id="skills"
                                  options={skillsData?.data.result || []}
                                  getOptionLabel={(option) => option.name} // Show name
                                  getOptionValue={(option) => option.id} // Use id as value
                                  defaultValue={skillsData?.data.result?.filter(
                                    (option) =>
                                      userSkillsIds.includes(option.id) // Select skills based on userSkillsIds
                                  )}
                                  onChange={(event, newValue) => {
                                    const selectedSkills = newValue
                                      ? newValue.map((item) => item.id)
                                      : [];
                                    setValue("skillsId", selectedSkills);
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      variant="outlined"
                                      label="Skills"
                                      placeholder="Select Skills"
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <button
                          className="wbtnsecondarylg"
                          onClick={handleSubmit(onSubmit)}
                        >
                          Save Now
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
                        <a
                          href="#"
                          className="text-danger text-decoration-underline"
                        >
                          Cancel
                        </a>
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

export default EditProfile;
