import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  CssBaseline,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#22be0d",
    },
  },
});
function ReplayJob() {
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
        `http://localhost:5140/api/ProposalReplay/job/${proposalId}`,
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
                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  sx={{ mt: 1 }}
                >
                  Is Accepted *
                  <FormControl fullWidth margin="normal">
                    <InputLabel id="isAccepted-label">Is Accepted</InputLabel>
                    <Select
                      labelId="isAccepted-label"
                      id="isAccepted"
                      defaultValue="accept"
                      label="Is Accepted"
                      sx={{
                        borderRadius: "30px",
                      }}
                      {...register("isAccepted", {
                        required: "Please select an option",
                      })}
                    >
                      <MenuItem value="true">Accept</MenuItem>
                      <MenuItem value="false">Refuse</MenuItem>
                    </Select>
                    {errors?.isAccepted && (
                      <Typography color="error">
                        {errors.isAccepted.message}
                      </Typography>
                    )}
                  </FormControl>
                </Box>
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
                    style={{ height: "180px" }}
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

export default ReplayJob;
