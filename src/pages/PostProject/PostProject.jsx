import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Sidebar from "../Profile/Sidebar";

function PostProject() {
  const token = localStorage.getItem("autoToken");
  const [cats, setCat] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills_id, setSelectedSkillsId] = useState([]);

  const schema = yup
    .object()
    .shape({
      expectedBudget: yup
        .number()
        .required()
        .min(1, "Expected Budget must br grater than or equal to 1"),
      expectedDuration: yup.object().shape({
        months: yup.number().required(),
        days: yup
          .number()
          .min(1, "Days must be greater than or equal to 0")
          .max(29, "Days must be less than or equal to 29")
          .required(),
      }),
    })
    .required();

  const nav = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      categoryId: 0,
      requiredSkillsId: [],
      expectedDuration: {
        months: 0,
        days: 0,
      },
      expectedBudget: 0,
    },

    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function fetchCategory() {
      const response = await fetch("http://localhost:5140/api/Category", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.result);
        setCat(data.result);
      }
    }

    async function fetchSkills() {
      const response = await fetch("http://localhost:5140/api/Skill", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.result);
        setSkills(
          data.result.map((skill) => ({
            label: skill.name,
            value: skill.id,
          }))
        );
      }
    }

    fetchCategory();
    fetchSkills();
  }, []);

  const onSubmit = async (data) => {
    try {
      data.requiredSkillsId = selectedSkills_id;

      const response = await fetch("http://localhost:5140/api/Project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log(response);

      if (response.ok === true) {
        nav("/service");
      } else {
        toast.error(response.statusText);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <Sidebar active="postProject" />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "var(--off-white)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="d-flex flex-column gap-4 rounded"
            style={{ width: "990px", backgroundColor: "var(--white)" }}
          >
            <div className="gig-info-card">
              <div className="gig-info-header">
                <h4 className="text-18 fw-semibold text-dark-300">
                  Create Project
                </h4>
              </div>
              <div className="gig-info-body bg-white">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="form-container">
                      <label htmlFor="title" className="form-label">
                        Project Title
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Title name here"
                        {...register("title", {
                          required: "title is required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-container">
                      <label htmlFor="description" className="form-label">
                        Description
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="description"
                        className="form-control shadow-none"
                        style={{height: "180px"}}
                        placeholder="Description name here"
                        {...register("description", {
                          required: "Description is required",
                        })}
                      />
                      {errors?.description && (
                        <span>{errors.description.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-container">
                      <label htmlFor="categoryId" className="form-label">
                        Categories<span className="text-lime-300">*</span>
                      </label>
                      <select
                        id="categoryId"
                        {...register("categoryId", {
                          required: "category is required",
                        })}
                        className="form-select shadow-none"
                      >
                        {cats.map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        ))}
                      </select>
                      {errors?.categoryId && (
                        <span>{errors.categoryId.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Autocomplete
                      multiple
                      id="skills"
                      options={skills}
                      getOptionLabel={(option) => option.label}
                      onChange={(event, newValue) => {
                        setSelectedSkillsId(newValue.map((item) => item.value));
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
                  <div className="col-12">
                    <h4>Expected Duration</h4>
                  </div>
                  <div className="col-6">
                    <div className="form-container">
                      <label htmlFor="months" className="form-label">
                        months
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        id="months"
                        type="number"
                        min="0"
                        step="1"
                        className="form-control shadow-none"
                        placeholder="months here"
                        {...register("expectedDuration.months", {
                          required: "months are required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-container">
                      <label htmlFor="days" className="form-label">
                        days
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        id="days"
                        type="number"
                        min="0"
                        step="1"
                        className="form-control shadow-none"
                        placeholder="days here"
                        {...register("expectedDuration.days", {
                          required: "days are required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-container">
                      <label htmlFor="expectedBudget" className="form-label">
                        ExpectedBudget
                        <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        id="expectedBudget"
                        className="form-control shadow-none"
                        placeholder="0 $"
                        {...register("expectedBudget", {
                          required: "Description is required",
                        })}
                      />
                      {errors?.expectedBudget && (
                        <span>{errors.expectedBudget.message}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="w-btn-secondary-lg mb-2 ms-2">
                Publish Gig Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostProject;
