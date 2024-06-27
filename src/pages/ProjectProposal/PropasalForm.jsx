import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function PropasalForm() {
  const projectId = useParams();
  console.log(projectId.projectId);
  const token = localStorage.getItem("autoToken");
  const nav = useNavigate();
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
    },
  });
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      deliverDate: formatDate(data.deliverDate),
    };
    console.log(formattedData);

    try {
      const response = await fetch(
        `http://localhost:5140/api/ProjectProposal/${projectId.projectId}`,
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
        toast.success("proposal send successfully");
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
            className="d-flex flex-column gap-4 rounded "
            style={{ width: "990px", backgroundColor: "var(--white)" }}
          >
            <div className="gig-info-header">
              <h4 className="text-18 fw-semibold text-dark-300">Proposal</h4>
            </div>

            <div className="gig-info-body bg-white ">
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

export default PropasalForm;
