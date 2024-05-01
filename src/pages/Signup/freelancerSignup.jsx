import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function FreelancerSignup() {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      console.log(data);
      const responseData = await response.json();
      if (responseData?.isSuccess === true) {

        nav("/signin")
        }
      
          }

    catch (error) {
      toast(error)
      // console.error(error);
    }
  };
  
    return (
        
            <>
  <div className="headerLogin">
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <div
            className="position-relative z-2"
            data-aos="fade-up"
          >
            <h2 className="sectionTitleLight mb-2">Sign Up</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb wbreadcrumb">
                <li className="breadcrumbitem">
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumbitem active " aria-current="page" style={{color:"var(--lime-300"}}>
                  SignUp
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py110 ">
    <div className="container">
      <div className="mb-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
              <Link to="/freesignup" className="wbtnsecondarylg" style={{textDecoration: "none"}}>
                Freelancer
              </Link>
              <Link to="/clientsignup" className="text-dark" style={{textDecoration: "none"}}>
                Client
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3 p-3">
        <div className="row g-4">
          <div className="col-lg-6 p-3 p-lg-5">
            <div className="mb-40">
              <h2 className="sectionTitle mb-2">Sign Up</h2>
              <p className="sectionDesc">Welcome to Work Zone</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formcontainer">
                <div className="row gy-3">
                  <div className="forminput col-12">
                    <label htmlFor="name" className="formlabel">
                      {" "}
                      Name
                      <span className="textlime300">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-control shadow-none"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors?.name && <span>{errors.name.message}</span>}
                    
                  </div>
      
                  <div className="forminput col-lg-12">
                    <label htmlFor="phone" className="formlabel">
                      Email <span className="textlime300">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      naem="name"
                      placeholder="demo@email.com"
                      className="form-control shadow-none"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors?.email && <span>{errors.email.message}</span>}
                  </div>
                  
                 
                  <div className="forminput col-lg-12">
                    <label htmlFor="email" className="formlabel">
                    Password <span className="textlime300">*</span>
                    </label>
                    <input
                      type="password"
                      id="email"
                      placeholder="****"
                      className="form-control shadow-none"
                      {...register("password", {
                        required: "password is required",
                      })}
                    />
                    {errors?.password && <span>{errors.password.message}</span>}
                  </div>
                  <div className="forminput col-lg-12">
                    <label htmlFor="password" className="formlabel">
                      ConfirmPassword <span className="textlime300">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="****"
                      className="form-control shadow-none"
                      {...register("confirmPassword", {
                        required: "confirmPassword is required",
                      })}
                    />
                    {errors?.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button className="wbtnsecondarylg">Create Account</button>
                </div>
              </div>
            </form>
            <div className="mt-4">
              <p className="text-center formtext">
                Already have an account ?<Link to="" > Login </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-img">
              <img src="./assets/images/1.png" className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    )
}

export default FreelancerSignup
