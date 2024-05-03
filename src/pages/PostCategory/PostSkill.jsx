import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function PostSkill() {
    const token = localStorage.getItem("autoToken")

  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5140/api/Skill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      const responseData = await response.json();
      if (responseData?.isSuccess === true) {
          console.log("skillll")
          nav("/service")
        }

        
      }

    catch (error) {
      toast(error)
      console.error(error);
    }
  };

    return (
        <div style= {{ backgroundColor : "var(--off-white)" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="d-flex flex-column gap-4 rounded py110"
          style={{ width: "990px", backgroundColor: "var(--white)" }}
        >
          <div className="gig-info-header">
            <h4 className="text-18 fw-semibold text-dark-300">Add Skill</h4>
          </div>

          <div className="gig-info-body bg-white ">
            <div className="row g-4">
              <div className="col-12">
                <div className="form-container">
                  <label htmlFor="title" className="form-label">
                    Skill Name
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Title name here"
                    name="name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors?.name && <span>{errors.name.message}</span>}
                </div>
              </div>
            </div>
            <button type="submit" className="w-btn-secondary-lg mt-4">
                Add Skill
            </button>
          </div>
          </div>
          </form>
        </div>
    )
}

export default PostSkill
