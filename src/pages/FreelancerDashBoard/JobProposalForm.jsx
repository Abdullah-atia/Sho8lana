import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

function JobProposalForm() {
  const { jobId } = useParams();
  const token = localStorage.getItem("autoToken");
  const nav = useNavigate();
  const [freelancers, setFreelancers] = useState([]);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      price: "",
      deliverDate: "",
      description: "",
      freelancerId: "",
    },
  });

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await fetch("http://localhost:5140/api/Freelancer", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.isSuccess) {
          setFreelancers(data.result);
        } else {
          toast.error("Failed to fetch freelancers");
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

    fetchFreelancers();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async (data) => {
    if (!selectedFreelancer) {
      toast.error("Freelancer is required");
      return;
    }

    const formattedData = {
      ...data,
      deliverDate: formatDate(data.deliverDate),
      freelancerId: selectedFreelancer.id,
    };
    console.log(formattedData);

    try {
      const response = await fetch(
        `http://localhost:5140/api/JobProposal/${jobId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formattedData),
        }
      );
      console.log(response);

      if (response.ok) {
        toast.success("Proposal sent successfully");
        nav("/Projects");
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
      {/* <Sidebar active={"addcategory"} /> */}
      <div
        className="d-flex justify-content-center align-items-center p-5"
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
            <div className="gig-info-header">
              <h4 className="text-18 fw-semibold text-dark-300">Proposal</h4>
            </div>

            <div className="gig-info-body bg-white">
              <div className="row g-4">
                <div className="col-12">
                  <div className="form-container">
                    <label htmlFor="price" className="form-label">
                      Price
                      <span className="text-lime-300">*</span>
                    </label>
                    <input
                      id="price"
                      type="number"
                      min="0"
                      step="1"
                      className="form-control shadow-none"
                      placeholder="price"
                      name="price"
                      {...register("price", {
                        required: "price is required",
                      })}
                    />
                    {errors?.price && <span>{errors.price.message}</span>}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-container">
                    <label htmlFor="deliverDate" className="form-label">
                      Delivery Date
                      <span className="text-lime-300">*</span>
                    </label>
                    <input
                      id="deliverDate"
                      type="date"
                      className="form-control shadow-none"
                      name="deliverDate"
                      {...register("deliverDate", {
                        required: "Delivery date is required",
                      })}
                    />
                    {errors?.deliverDate && (
                      <span>{errors.deliverDate.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-container">
                    <label htmlFor="description" className="form-label">
                      Description
                      <span className="text-lime-300">*</span>
                    </label>
                    <input
                      id="description"
                      type="text"
                      className="form-control shadow-none"
                      placeholder="description"
                      name="description"
                      {...register("description", {
                        required: "description is required",
                      })}
                    />
                    {errors?.description && (
                      <span>{errors.description.message}</span>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-container">
                    <label htmlFor="freelancer" className="form-label">
                      Freelancer
                      <span className="text-lime-300">*</span>
                    </label>
                    <Autocomplete
                      disablePortal
                      id="freelancer"
                      options={freelancers}
                      getOptionLabel={(option) => option.name}
                      onChange={(event, value) => setSelectedFreelancer(value)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Freelancer"
                          variant="outlined"
                          error={!!errors.freelancerId}
                          helperText={
                            errors.freelancerId && "Freelancer is required"
                          }
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="w-btn-secondary-lg">
              Send Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobProposalForm;
