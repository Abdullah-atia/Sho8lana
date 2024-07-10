import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"

function DeliveredProject() {
    const {projectId} = useParams()
    const token = localStorage.getItem("autoToken");
      const nav = useNavigate();
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm({
        defaultValues: {
          link: "",
        
        },
      });

      const onSubmit = async (data) => {
        try {
          const response = await fetch(
            `http://localhost:5140/api/DeliveredProducts/project/${projectId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(data),
            }
          );
          console.log(response);

          if (response.ok) {
            toast.success("Project Delivered successfully");
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
                <h4 className="text-18 fw-semibold text-dark-300">
                  Deliverey Project
                </h4>
              </div>
              <div className="gig-info-body bg-white ">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="form-container">
                      <label htmlFor="link" className="form-label">
                        Link
                        <span className="text-lime-300">*</span>
                      </label>
                      <textarea
                        id="link"
                        type="text"
                        style={{ height: "180px" }}
                        className="form-control shadow-none"
                        placeholder="link"
                        name="link"
                        {...register("link", {
                          required: "link is required",
                        })}
                      />
                      {errors?.link && <span>{errors.link.message}</span>}
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-btn-secondary-lg">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default DeliveredProject
