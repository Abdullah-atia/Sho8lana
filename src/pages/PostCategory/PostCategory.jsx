import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function PostCategory() {
  const token = localStorage.getItem("autoToken")
  const [image, setImage] = useState();

  const onDrop = async (acceptedFiles) => {
    console.log(acceptedFiles)
     const uploadedFile = acceptedFiles[0];
    // setFileName(uploadedFile.name);
    setImage(uploadedFile);

  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 2, 

  });

  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      Name: "",
    },
  });



  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("Image", image);
    formData.append("Name", data.Name);
    console.log(formData);


    try {
      const response = await fetch("http://localhost:5140/api/Category", {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      // console.log(data);
      console.log(response);

      // const responseData = response.json();

      // if (re?.isSuccess === true) {
      //   console.log("WOw");
      // }
    } catch (error) {
      toast(error);
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
      < >
        <div
          className="d-flex flex-column gap-4 rounded "
          style={{ width: "990px", backgroundColor: "var(--white)" }}
        >
          <div className="gig-info-header">
            <h4 className="text-18 fw-semibold text-dark-300">Category Info</h4>
          </div>

          <div className="gig-info-body bg-white ">
            <div className="row g-4">
              <div className="col-12">
                <div className="form-container">
                  <label htmlFor="title" className="form-label">
                    Category Title
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Title name here"
                    name="Name"
                    {...register("Name", {
                      required: "Name is required",
                    })}
                  />
                  {errors?.Name && <span>{errors.Name.message}</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="gig-info-header mt-2 mb-2">
            <h4 className="text-18 fw-semibold text-dark-300">Upload Image</h4>
          </div>
          <div className="gig-info-body bg-white">
            <p className="text-dark mb-2">Category Image</p>
            <div className="d-flex flex-wrap gap-3">
              {/* <input type="file" accept="image/*" onChange={handleUpload} /> */}
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                  <h4>Files</h4>
                  {/* <ul>{image}</ul> */}
                </aside>
              </section>
              {errors?.Image && <span>{errors.Image.message}</span>}
              {image ? (
                <img src={image} width={300} height={150} alt="category" />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button onClick={onSubmit} type="submit" className="w-btn-secondary-lg">
            Publish Category
          </button>
        </div>
      </>
    </div>
  );
}

export default PostCategory;
