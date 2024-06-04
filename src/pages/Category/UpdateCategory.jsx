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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <button className="wbtnsecondarylg" type="submit">
          Update Category
        </button>
      </form>
    </div>
  );
}

export default UpdateCategory;
