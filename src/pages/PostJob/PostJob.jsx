function PostJob() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh", backgroundColor:"var(--off-white)"}}>
      <div className="d-flex flex-column gap-4 rounded " style={{width: "990px", backgroundColor:"var(--white)"}}>
        {/* <!-- Project Info --> */}
        <div className="gig-info-card">
          {/* <!-- Header --> */}
          <div className="gig-info-header">
            <h4 className="text-18 fw-semibold text-dark-300">Job Info</h4>
          </div>
          <div className="gig-info-body bg-white">
            <div className="row g-4">
              <div className="col-12">
                <div className="form-container">
                  <label for="title" className="form-label">
                    Job Title
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Title name here"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-container">
                  <label for="author" className="form-label">
                    Post By
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    className="form-control shadow-none"
                    placeholder="Author name here"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-container">
                  <label for="jobDuration" className="form-label">
                    Job Duration<span className="text-lime-300">*</span>
                  </label>
                  <select
                    id="jobDuration"
                    autocomplete="off"
                    className="form-select shadow-none"
                  >
                    <option value="0">Hourly</option>
                    <option value="1">03 Days</option>
                    <option value="2">05 Days</option>
                    <option value="3">07 Day</option>
                    <option value="4">10 Days</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-container">
                  <label for="jobType" className="form-label">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    autocomplete="off"
                    className="form-select shadow-none"
                  >
                    <option value="0">Fixed Price</option>
                    <option value="1">Urgent</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <label for="description" className="form-label">
                  Description*
                </label>
                {/* <div className="w-editor-wrapper">
                  <div id="toolbar"></div>
                  <div className="ql-toolbar ql-snow">
                    <span className="ql-formats">
                      <span className="ql-header ql-picker">
                        <span
                          className="ql-picker-label"
                          tabindex="0"
                          role="button"
                          aria-expanded="false"
                          aria-controls="ql-picker-options-0"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <polygon
                              className="ql-stroke"
                              points="7 11 9 13 11 11 7 11"
                            ></polygon>{" "}
                            <polygon
                              className="ql-stroke"
                              points="7 7 9 5 11 7 7 7"
                            ></polygon>{" "}
                          </svg>
                        </span>
                        <span
                          className="ql-picker-options"
                          aria-hidden="true"
                          tabindex="-1"
                          id="ql-picker-options-0"
                        >
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="1"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="2"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="3"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="4"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="5"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="6"
                          ></span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item ql-selected"
                          ></span>
                        </span>
                      </span>
                      <select className="ql-header" style={{display: "none"}}>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option selected="selected"></option>
                      </select>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-bold">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <path
                            className="ql-stroke"
                            d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                          ></path>{" "}
                          <path
                            className="ql-stroke"
                            d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                          ></path>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-italic">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="13"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="5"
                            x2="11"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="8"
                            x2="10"
                            y1="14"
                            y2="4"
                          ></line>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-underline">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <path
                            className="ql-stroke"
                            d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                          ></path>{" "}
                          <rect
                            className="ql-fill"
                            height="1"
                            rx="0.5"
                            ry="0.5"
                            width="12"
                            x="3"
                            y="15"
                          ></rect>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-link">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="11"
                            y1="7"
                            y2="11"
                          ></line>{" "}
                          <path
                            className="ql-even ql-stroke"
                            d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                          ></path>{" "}
                          <path
                            className="ql-even ql-stroke"
                            d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                          ></path>{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <button type="button" className="ql-list" value="ordered">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="7"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke ql-thin"
                            x1="2.5"
                            x2="4.5"
                            y1="5.5"
                            y2="5.5"
                          ></line>{" "}
                          <path
                            className="ql-fill"
                            d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                          ></path>{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                          ></path>{" "}
                          <path
                            className="ql-stroke ql-thin"
                            d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                          ></path>{" "}
                        </svg>
                      </button>
                      <button type="button" className="ql-list" value="bullet">
                        <svg viewBox="0 0 18 18">
                          {" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="6"
                            x2="15"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="4"
                            y2="4"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="9"
                            y2="9"
                          ></line>{" "}
                          <line
                            className="ql-stroke"
                            x1="3"
                            x2="3"
                            y1="14"
                            y2="14"
                          ></line>{" "}
                        </svg>
                      </button>
                    </span>
                    <span className="ql-formats">
                      <span className="ql-align ql-picker ql-icon-picker">
                        <span
                          className="ql-picker-label"
                          tabindex="0"
                          role="button"
                          aria-expanded="false"
                          aria-controls="ql-picker-options-1"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="15"
                              y1="9"
                              y2="9"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="13"
                              y1="14"
                              y2="14"
                            ></line>{" "}
                            <line
                              className="ql-stroke"
                              x1="3"
                              x2="9"
                              y1="4"
                              y2="4"
                            ></line>{" "}
                          </svg>
                        </span>
                        <span
                          className="ql-picker-options"
                          aria-hidden="true"
                          tabindex="-1"
                          id="ql-picker-options-1"
                        >
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item ql-selected"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="15"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="13"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="3"
                                x2="9"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="center"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="3"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="14"
                                x2="4"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="12"
                                x2="6"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="right"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="3"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="5"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="9"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </span>
                          <span
                            tabindex="0"
                            role="button"
                            className="ql-picker-item"
                            data-value="justify"
                          >
                            <svg viewBox="0 0 18 18">
                              {" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="3"
                                y1="9"
                                y2="9"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="3"
                                y1="14"
                                y2="14"
                              ></line>{" "}
                              <line
                                className="ql-stroke"
                                x1="15"
                                x2="3"
                                y1="4"
                                y2="4"
                              ></line>{" "}
                            </svg>
                          </span>
                        </span>
                      </span>
                      <select className="ql-align" style={{display: "none"}}>
                        <option selected="selected"></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                      </select>
                    </span>
                  </div>
                  <div id="editor" className="ql-container ql-snow">
                    <div
                      className="ql-editor ql-blank"
                      data-gramm="false"
                      contenteditable="true"
                    ></div>
                    <div
                      className="ql-clipboard"
                      contenteditable="true"
                      tabindex="-1"
                    ></div>
                    <div className="ql-tooltip ql-hidden">
                      <a
                        className="ql-preview"
                        target="_blank"
                        href="about:blank"
                      ></a>
                      <input
                        type="text"
                        data-formula="e=mc^2"
                        data-link="https://quilljs.com"
                        data-video="Embed URL"
                      />
                      <a className="ql-action"></a>
                      <a className="ql-remove"></a>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-6">
                <div className="form-container">
                  <label for="budget" className="form-label">
                    Budget
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    id="budget"
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Budget here"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-container">
                  <label for="location" className="form-label">
                    Location
                    <span className="text-lime-300">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="form-control shadow-none"
                    placeholder="Location here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Upload  Img --> */}
        {/* <div className="gig-info-card">
          <div className="gig-info-header">
            <h4 className="text-18 fw-semibold text-dark-300">Upload Images</h4>
          </div>
          <div className="gig-info-body bg-white">
            <p className="text-dark-200 mb-2">Profile Image</p>
            <div className="d-flex flex-wrap gap-3">
              <div className="col-12">
                <label
                  for="gig-img"
                  className="border text-center gig-file-upload"
                >
                  <img
                    src="assets/img/dashboard/gigs/gallery-icon.png"
                    alt=""
                  />
                  <p className="text-dark-200">Max.Size 10MB</p>
                  <input className="d-none" type="file" name="" id="gig-img" />
                </label>
              </div>
              <div className="position-relative gig-media-thumb">
                <img
                  src="assets/img/dashboard/job/icon-1.png"
                  className="img-fluid"
                  alt=""
                />
                <button className="gig-img-delete-btn">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.85995 5.03223C7.69026 5.03223 7.55273 5.16976 7.55273 5.33945V11.1459C7.55273 11.3155 7.69026 11.4531 7.85995 11.4531C8.02965 11.4531 8.16718 11.3155 8.16718 11.1459V5.33945C8.16718 5.16976 8.02965 5.03223 7.85995 5.03223Z"
                      fill="white"
                    ></path>
                    <path
                      d="M4.23593 5.03223C4.06624 5.03223 3.92871 5.16976 3.92871 5.33945V11.1459C3.92871 11.3155 4.06624 11.4531 4.23593 11.4531C4.40562 11.4531 4.54315 11.3155 4.54315 11.1459V5.33945C4.54315 5.16976 4.40562 5.03223 4.23593 5.03223Z"
                      fill="white"
                    ></path>
                    <path
                      d="M1.59326 4.18476V11.754C1.59326 12.2014 1.75731 12.6216 2.04389 12.923C2.32915 13.2253 2.72613 13.3969 3.1416 13.3976H8.95431C9.3699 13.3969 9.76688 13.2253 10.052 12.923C10.3386 12.6216 10.5027 12.2014 10.5027 11.754V4.18476C11.0723 4.03355 11.4415 3.48319 11.3653 2.89863C11.2889 2.31419 10.791 1.877 10.2016 1.87688H8.62861V1.49286C8.63041 1.16992 8.50272 0.859816 8.2741 0.631681C8.04549 0.403665 7.73491 0.276697 7.41197 0.279337H4.68394C4.361 0.276697 4.05042 0.403665 3.82181 0.631681C3.59319 0.859816 3.4655 1.16992 3.4673 1.49286V1.87688H1.89436C1.30488 1.877 0.806967 2.31419 0.730642 2.89863C0.654437 3.48319 1.02358 4.03355 1.59326 4.18476ZM8.95431 12.7832H3.1416C2.61633 12.7832 2.2077 12.332 2.2077 11.754V4.21176H9.88821V11.754C9.88821 12.332 9.47958 12.7832 8.95431 12.7832ZM4.08174 1.49286C4.0797 1.33289 4.14259 1.17892 4.25612 1.06599C4.36952 0.953062 4.52385 0.891018 4.68394 0.893778H7.41197C7.57206 0.891018 7.72639 0.953062 7.83979 1.06599C7.95332 1.1788 8.01621 1.33289 8.01416 1.49286V1.87688H4.08174V1.49286ZM1.89436 2.49132H10.2016C10.507 2.49132 10.7545 2.7389 10.7545 3.04432C10.7545 3.34974 10.507 3.59732 10.2016 3.59732H1.89436C1.58894 3.59732 1.34136 3.34974 1.34136 3.04432C1.34136 2.7389 1.58894 2.49132 1.89436 2.49132Z"
                      fill="white"
                    ></path>
                    <path
                      d="M6.04794 5.03223C5.87825 5.03223 5.74072 5.16976 5.74072 5.33945V11.1459C5.74072 11.3155 5.87825 11.4531 6.04794 11.4531C6.21763 11.4531 6.35516 11.3155 6.35516 11.1459V5.33945C6.35516 5.16976 6.21763 5.03223 6.04794 5.03223Z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Submit Btn --> */}
        <div>
          <button className="w-btn-secondary-lg">
            Publish Gig Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M9 9L13 5M13 5L9 1M13 5L1 5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
