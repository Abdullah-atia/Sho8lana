import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateSkill() {
  const { skillId } = useParams();
  const token = localStorage.getItem("autoToken");
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5140/api/Skill/${skillId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSkill(response?.data.result);
        formik.setValues({ name: response.data.result.name }); // Update form values with fetched data
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchSkill();
  }, [skillId, token]);

  const updateSkill = async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:5140/api/Skill/${skillId}`,
        values,
        {
          headers: {
            "Content-Type": " application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Update response", response.data);
      toast.success("Skill updated successfully!");
      navigate("/allSkills");
    } catch (error) {
      console.error("Error updating Skill:", error);
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: skill?.name || "",
    },
    enableReinitialize: true,
    onSubmit: updateSkill,
  });


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#f7f5f0" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="gig-info-body bg-white" style={{ width: "990px" }}>
          <div className="row gap-4">
            <div className="gig-info-header">
              <h4 className="text-18 fw-semibold text-dark-300">
                Update Skill
              </h4>
            </div>
            <div className="cal-12">
              <div className="form-container">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="form-control shadow-none"
                />
              </div>
            </div>
            <div className="col-12">
              <button className="wbtnsecondarylg mt-4" type="submit">
                Update Skill
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateSkill;
