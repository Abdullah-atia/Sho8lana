import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateCategory() {
  const { id } = useParams();
  const token = localStorage.getItem("autoToken");
  const navigate = useNavigate()
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5140/api/Category/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategory(response.data.result);
        formik.setValues({ name: response.data.result.name }); // Update form values with fetched data
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id, token]);

  const updateCategory = async (values) => {
    try {
      const form_data = new FormData();
      form_data.append("Name", values.name);
      if (image) {
        form_data.append("Image", image);
      }

      const response = await axios.put(
        `http://localhost:5140/api/Category/${id}`,
        form_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Update response", response.data);
      toast.success("Category updated successfully!");
      navigate("/allCategory");
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: category?.name || "", 
    },
    enableReinitialize: true, 
    onSubmit: updateCategory,
  });

  const handleImageChange = (event) => {
    setImage(event.currentTarget.files[0]);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#f7f5f0" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="gig-info-body bg-white" style={{ width: "990px" }}>
          <div className="row gap-4">
            <div className="gig-info-header">
              <h4 className="text-18 fw-semibold text-dark-300">Update Category</h4>
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
              <div className="form-container">
                <label className="form-label" htmlFor="image">
                  Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                  className="form-control shadow-none"
                />
              </div>
              <button className="wbtnsecondarylg mt-4" type="submit">
                Update Category
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateCategory;
