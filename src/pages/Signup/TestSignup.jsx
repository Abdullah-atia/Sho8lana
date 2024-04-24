import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function TestSignup() {
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
    },
  });
    return (
        <div>
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
              <a href="#" className="w-form-btn">
                Freelancer
              </a>
              <a href="#" className="w-form-btn-outline">
                Client
              </a>
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
            <form>
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
                      placeholder=" Name"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className="forminput col-lg-6">
                    <label htmlFor="phone" className="formlabel">
                      Phone <span className="textlime300">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder={"01403817190"}
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className="forminput col-lg-6">
                    <label htmlFor="phone" className="formlabel">
                      Email <span className="textlime300">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="demo@email.com"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className="forminput col-lg-6">
                    <label htmlFor="country" className="formlabel">
                      Country <span className="textlime300">*</span>
                    </label>
                    <select
                      className="form-select shadow-none"
                      name="country"
                      id="country"
                    >
                      <option value={1}>Select Country</option>
                      <option value={2}>Germany</option>
                      <option value={3}>China</option>
                    </select>
                  </div>
                  <div className="forminput col-lg-6">
                    <label htmlFor="city" className="formlabel">
                      City <span className="textlime300">*</span>
                    </label>
                    <select
                      className="form-select shadow-none"
                      name="country"
                      id="country"
                    >
                      <option value={1}>Select City</option>
                      <option value={2}>Berlin</option>
                      <option value={3}>Beijing</option>
                    </select>
                  </div>
                  <div className="forminput col-lg-12">
                    <label htmlFor="email" className="formlabel">
                      Email <span className="textlime300">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className="forminput col-lg-12">
                    <label htmlFor="password" className="formlabel">
                      Password <span className="textlime300">*</span>
                    </label>
                    <input
                      type="text"
                      id="password"
                      placeholder="****"
                      className="form-control shadow-none"
                    />
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button className="wbtnsecondarylg">Create Account</button>
                </div>
              </div>
            </form>
            <div className="mt-4">
              <p className="text-center formtext">
                Already have an account ?<a href=""> Login </a>
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
        </div>
    )
}

export default TestSignup
