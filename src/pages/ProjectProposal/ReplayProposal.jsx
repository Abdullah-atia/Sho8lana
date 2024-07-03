import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function ReplayProposal() {
  const { proposalId } = useParams();
  const token = localStorage.getItem("autoToken");
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      isAccepted: "accept",
      note: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:5140/api/ProjectProposal/${proposalId}`,
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
        toast.success("Reply sent successfully");
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
          style={{ width: "600px", backgroundColor: "var(--white)" }}
        >
          <div className="gig-info-header">
            <h4 className="text-18 fw-semibold text-dark-300">Proposal</h4>
          </div>

          <div className="gig-info-body bg-white">
            <div className="row g-4">
              <div className="col-12">
                <div className="form-container">
                  <label htmlFor="isAccepted" className="form-label">
                    Is Accepted
                    <span className="text-lime-300">*</span>
                  </label>
                  <select
                    id="isAccepted"
                    className="form-control shadow-none"
                    name="isAccepted"
                    {...register("isAccepted", {
                      required: "Please select an option",
                    })}
                  >
                    <option value="true" >Accept</option>
                    <option value="false">Refuse</option>
                  </select>
                  {errors?.isAccepted && (
                    <span>{errors.isAccepted.message}</span>
                  )}
                </div>
              </div>

              <div className="col-12">
                <div className="form-container">
                  <label htmlFor="note" className="form-label">
                    Note
                    <span className="text-lime-300">*</span>
                  </label>
                  <textarea
                    id="note"
                    className="form-control shadow-none"
                    placeholder="Enter your note here"
                    name="note"
                    {...register("note", {
                      required: "Note is required",
                    })}
                  ></textarea>
                  {errors?.note && <span>{errors.note.message}</span>}
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
  );
}

export default ReplayProposal;
