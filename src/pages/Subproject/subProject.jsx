import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function subProject() {
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
          description: "",
        },
      });
        const onSubmit = async (data) => {
          const formattedData = {
            ...data,
            deliverDate: formatDate(data.deliverDate),
          };
          console.log(formattedData);

          try {
            const response = await fetch(
              `http://localhost:5140/api/Job/${projectId.projectId}`,
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
            
        </div>
    )
}

export default subProject
