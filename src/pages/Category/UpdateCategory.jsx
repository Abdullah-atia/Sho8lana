import { useParams } from "react-router-dom";
import { request } from "../../utils/axios-utils";
import { useFormik } from "formik";

function UpdateCategory() {
    const {CategoryID} = useParams()
    const { categoryDate } = request({ url: `/Category/${CategoryID}` });
    const updateCategory = async (values) =>{
        try {
            const form_data = new FormData();
      form_data.append("Name", values.name);
      form_data.append("Image", image);
      const {data} = request({url :  `/Category/${CategoryID}`})
        }
    }
    let formik = useFormik({
      initialValues: {
        name: categoryDate.name || " ",
      },
      onSubmit: updateCategory,
    });
  return <div></div>;
}

export default UpdateCategory;
