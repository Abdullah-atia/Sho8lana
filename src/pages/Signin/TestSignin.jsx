import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AdminContext } from "../../Context/AdminContext";
// import { useAdmin } from "../../Context/AdminContext";
import { useNavigate, Link } from "react-router-dom";

function TestSignin() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5140/api/Account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log(data);
      const responseData = await response.json();
      if (responseData?.isSuccess === true) {
        localStorage.setItem("autoToken", responseData.result.token);
        localStorage.setItem("user_id", responseData.result.Id);
        localStorage.setItem("user_role", responseData.result.role);

        if (responseData.result.role === "Admin") {
          localStorage.setItem("Admin", responseData.result.role);

          setIsAdmin(true);
          console.log("Admin");
          window.location.replace("/admin");
        } else {
          const user_id = localStorage.getItem("user_id");
          window.location.replace(`/Profile/${user_id}`);
          // nav(`/Profile/${user_id}`, { replace: true }); // REPLACE, redirect
        }
      } else {
        toast.error("email or password is wrong");
      }
    } catch (error) {
      toast(error.message);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="headerLogin ">
        <div className=" container">
          <div className="col-auto ">
            <div className="position-relative z-2" data-aos="fade-up">
              <h2 className="sectionTitleLight mb-2">Sign In</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb wbreadcrumb">
                  <li className="breadcrumbitem">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumbitem active "
                    aria-current="page"
                    style={{ color: "var(--lime-300)" }}
                  >
                    SignIn
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="py110 ">
        <div className="container">
          <div className="mb-5">
            <div className="row justify-content-center">
              <div className="col-auto"></div>
            </div>
          </div>
          <div className="bg-white rounded-3 p-3">
            <div className="row g-4">
              <div className="col-lg-6 p-3 p-lg-5">
                <div className="mb-40">
                  <h2 className="sectionTitle mb-2">Sign In</h2>
                  <p className="sectionDesc">Welcome to Sho8lana</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-container">
                    <div className="row gy-3">
                      <div className="forminput col-12">
                        <label htmlFor="name" className="formlabel">
                          {" "}
                          Email
                          <span className="textlime300">*</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="example@gmail.com"
                          className="form-control shadow-none"
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors?.email && <span>{errors.email.message}</span>}
                      </div>
                      <div className="forminput col-lg-12">
                        <label htmlFor="password" className="formlabel">
                          Password <span className="textlime300">*</span>
                        </label>
                        <input
                          type="password"
                          id="password"
                          // name="password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                          placeholder="****"
                          className="form-control shadow-none"
                        />
                        {errors.password && (
                          <span>{errors.password.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="d-grid mt-4">
                      <button type="submit" className="wbtnsecondarylg">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-4">
                  <p className="text-center formtext">
                    Don't have an account ?
                    <Link to="/clientsignup"> Signup </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login-img">
                  <img
                    src="./assets/images/1.png"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSignin;
