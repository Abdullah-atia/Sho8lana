import { Link, useParams } from "react-router-dom";
import {useUserData} from "../../hooks/useUserData";

export default function Profile() {
  const {userId} = useParams()
  const {data, isLoading, isError, error } = useUserData(userId)
  // console.log(data.data.result)

  if(isLoading){
        return <p>Loading...</p>
    }
    if(isError) {
        return <h2>{error.message}</h2>;
    }

  return(
    
    <div className="bgOffWhite py110">
      <div className="container">
        <div className="row">
          <div className=" d-flex flex-column gap-4">
            <div className=" p-4 rounded-4 bg-white position-relative">
              <div className="jobTypeBadge position-absolute d-flex flex-column gap-2">
                <p className="jobTypeBadgeTertiary">Top Seller</p>
                <p className="jobTypeBadgeSecondary">$90/hr</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center py-4">
                <img
                  src={data.data.result.imageUrl}
                  style={{ width: 110, height: 110 }}
                  className=" rounded-circle mb-4"
                  alt=""
                />
                <h3
                  style={{ fontSize: 24 }}
                  className="fw-bold textDark300 mb-2"
                >
                  {data.data.result.name}
                </h3>
                <p className="textDark200 mb-1">UiUx Designer</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={11}
                    viewBox="0 0 12 11"
                    fill="none"
                  >
                    <path
                      d="M11.1141 4.15628C11.0407 3.92385 10.8406 3.75929 10.6048 3.73731L7.38803 3.43649L6.11676 0.370622C6.0229 0.145376 5.80934 0 5.57163 0C5.33392 0 5.12027 0.145376 5.02701 0.370622L3.75574 3.43649L0.538508 3.73731C0.302669 3.75973 0.102963 3.92429 0.0291678 4.15628C-0.0442024 4.3887 0.0235566 4.64364 0.201923 4.80478L2.63351 7.0011L1.91656 10.2539C1.8641 10.493 1.95422 10.7403 2.14687 10.8838C2.25042 10.9613 2.37208 11 2.49417 11C2.59908 11 2.70407 10.9713 2.79785 10.9135L5.57163 9.20504L8.3449 10.9135C8.54835 11.0387 8.80417 11.0272 8.99639 10.8838C9.18904 10.7403 9.27916 10.493 9.22671 10.2539L8.50975 7.0011L10.9413 4.80478C11.1196 4.64364 11.1875 4.38923 11.1141 4.15628Z"
                      fill="#06131C"
                    />
                  </svg>
                  <span className="textDark300">4.9 </span>
                  <span className="textDark200"> (399 Reviews)</span>
                </p>
              </div>
              <div className="d-flex gap-4 justify-content-between bgOffWhite p-4 rounded-4">
                <div>
                  <p className="textDark300 fw600">Location</p>
                  <p className="textDark200">Dhaka</p>
                </div>
                <div>
                  <p className="textDark300 fw600">Rate</p>
                  <p className="textDark200">$90/hr</p>
                </div>
                <div>
                  <p className="textDark300 fw600">Jobs</p>
                  <p className="textDark200">560</p>
                </div>
              </div>
              <ul className="py-4">
                <li className="py-1 d-flex justify-content-between align-items-center">
                  <p className="textDark200">Location:</p>
                  <p className="textDark300 fw600">Dhaka, Bangladesh</p>
                </li>
                <li className="py-1 d-flex justify-content-between align-items-center">
                  <p className="textDark200">Member Since:</p>
                  <p className="textDark300 fw600">January 04, 2024</p>
                </li>
                <li className="py-1 d-flex justify-content-between align-items-center">
                  <p className="textDark200">Gender:</p>
                  <p className="textDark300 fw600">Male</p>
                </li>
                <li className="py-1 d-flex justify-content-between align-items-center">
                  <p className="textDark200">Language:</p>
                  <p className="textDark300 fw600">English</p>
                </li>
              </ul>
              <Link to="/editProfile/:userId"  className="wbtnsecondarylg w-100">
                Contact Me
                <svg
                  width={14}
                  height={10}
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 9L13 5M13 5L9 1M13 5L1 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            
            <div className=" p-4 rounded-4 bg-white border-bottom pb-4">

            <div className="d-flex justify-content-between">
                  <h4
                    style={{ fontSize: 18, marginBottom: 20 }}
                    className="text-dark-300 fw-semibold"
                  >
                    About Description

                  </h4>
                  <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                    </svg>
                    </button>

                  

                  </div>
                
              </div>
             
              <p className="textDark200 fs-6">
                There are many variations of passages of Lorem Ipsum our a
                available, but the majority have oneks suffered alteration in some
                form, ki by injected humour, or randomised tomar a words which
                don't look even slightly believable. If you are going to use a
                valas passage of Lorem Ipsum, you need.Fusce eget pulvinar tor
                tor. Quisque suscipit ante ac nisi a rutrumnec mollis nulla.
              </p>
            </div>

            <div className="p-4 rounded-4 bg-white border-bottom py-4">
              <div className="d-flex justify-content-between">
                  <h4
                    style={{ fontSize: 18, marginBottom: 20 }}
                    className="text-dark-300 fw-semibold"
                  >
                    Skills

                  </h4>
                  <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                    </svg>
                    </button>

                  

                  </div>

              </div>
              
              <div className="d-flex flex-wrap gap-3">
                {data.data.result.skills.map((skill) =>{
                  return <span className="singleSkill">skill</span>
                })}
              </div>
            </div>

            <div className=" p-4 rounded-4 bg-white border-bottom py-4">
            <div className="d-flex justify-content-between">
                  <h4
                    style={{ fontSize: 18, marginBottom: 20 }}
                    className="text-dark-300 fw-semibold"
                  >
                    Education

                  </h4>
                  <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                    </svg>
                    </button>

                  </div>
     
              </div>
              <div className="mb-4">
                <h4 className="textDark300  fw-semibold mb-1">
                  North South University
                </h4>
                <p className="textDark200">
                  Aperiam deserunt dol, Burundi <br />
                  2015 - 2020
                </p>
              </div>
              <div>
                <h4 className="textDark300  fw-semibold mb-1">
                  Independent University BD
                </h4>
                <p className="textDark200">
                  Aperiam deserunt dol, Burundi <br />
                  2015 - 2020
                </p>
              </div>
            </div>

            <div className=" p-4 rounded-4 bg-white pt-4">
            <div className="d-flex justify-content-between">
                  <h4
                    style={{ fontSize: 18, marginBottom: 20 }}
                    className="text-dark-300 fw-semibold"
                  >
                   Language

                  </h4>
                  <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                    </svg>
                    </button>

                  </div>
    
              </div>
              <ul>
                <li className="py-1 textDark200 fs-6">English</li>
                <li className="py-1 textDark200 fs-6">Bangla</li>
                <li className="py-1 textDark200 fs-6">Arabic</li>
              </ul>
            </div>

           
          </div>
          <div className=" mt-4 mt-lg-0">
            {/* Tab Nav */}
            <div
              className="bg-white d-flex gap-3 p-4 freelancerTab mb-4"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="tabBtn active"
                id="nav-service-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-service"
                type="button"
                role="tab"
                aria-controls="nav-service"
                aria-selected="true"
              >
                Gig Service
              </button>
              <button
                className="tabBtn"
                id="nav-portfolio-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-portfolio"
                type="button"
                role="tab"
                aria-controls="nav-portfolio"
                aria-selected="false"
                tabIndex={-1}
              >
                Portfolio
              </button>
            </div>
            <div style={{ borderRadius: 16, padding: 30 }} className="bg-white ">
              <div className="tab-content" id="nav-tabContent">
                {/* Services */}
                <div
                  className="tab-pane fade show active"
                  id="nav-service"
                  role="tabpanel"
                  aria-labelledby="nav-service-tab"
                  tabIndex={0}
                >
                  <div className="row g-4">
                   
                    
                    <div className="swiperSlide col-xl-4 col-md-6 " >
                        <div className="serviceCard bg-white">
                          <div className="position-relative">
                            <img
                              src="../../../public/Images/cta-bg.png"
                              height={180}
                              className="viewCardImg w-100"
                              alt=""
                            />
                            <button className="serviceCardBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <circle cx={16} cy={16} r={16} fill="white" />
                                <path
                                  d="M16.68 9.51314L16 10.2438L15.3199 9.51315C13.442 7.49562 10.3974 7.49562 8.5195 9.51314C6.64161 11.5307 6.64161 14.8017 8.5195 16.8192L14.6399 23.3947C15.391 24.2018 16.6089 24.2018 17.3601 23.3947L23.4804 16.8192C25.3583 14.8017 25.3583 11.5307 23.4804 9.51314C21.6026 7.49562 18.5579 7.49562 16.68 9.51314Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="serviceCardContent">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="serviceCardPrice  fw-bold">$15</h3>
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={15}
                                  viewBox="0 0 16 15"
                                  fill="none"
                                >
                                  <path
                                    d="M16 5.95909C15.8855 6.07153 15.7709 6.21207 15.6564 6.32451C14.4537 7.36454 13.2511 8.37646 12.0484 9.38838C11.9339 9.47271 11.9053 9.55704 11.9625 9.69758C12.3348 11.2717 12.707 12.8739 13.0793 14.448C13.1365 14.6448 13.1079 14.8134 12.9361 14.9258C12.7643 15.0383 12.5925 15.0102 12.4207 14.9258C10.989 14.0826 9.58587 13.2393 8.15415 12.396C8.03961 12.3117 7.9537 12.3117 7.83917 12.396C6.43607 13.2393 5.00435 14.0826 3.60126 14.8977C3.48672 14.9821 3.34355 15.0102 3.20038 14.9821C2.9713 14.9258 2.85676 14.701 2.91403 14.448C3.14311 13.5204 3.34355 12.5928 3.57262 11.6652C3.74443 10.9906 3.8876 10.316 4.05941 9.64136C4.08805 9.52893 4.05941 9.47271 3.97351 9.38838C2.74222 8.34835 1.53957 7.30832 0.308291 6.26829C0.251022 6.21207 0.193753 6.18396 0.165118 6.12775C0.0219457 6.01531 -0.0353233 5.87477 0.0219457 5.678C0.0792147 5.50935 0.222387 5.42502 0.394194 5.39691C0.651905 5.36881 0.909615 5.3407 1.19596 5.3407C2.36998 5.22826 3.54399 5.14393 4.74664 5.0315C4.97572 5.00339 5.20479 4.97528 5.43387 4.97528C5.54841 4.97528 5.60567 4.91906 5.63431 4.83474C6.2929 3.31685 6.92286 1.82708 7.58146 0.309198C7.66736 0.140545 7.75326 0.0281089 7.9537 0C8.18278 0.0562179 8.32595 0.140545 8.41186 0.365416C8.75547 1.15247 9.09908 1.96762 9.4427 2.75467C9.75768 3.4574 10.044 4.18823 10.359 4.89095C10.3876 4.97528 10.4449 5.0315 10.5594 5.0315C11.4757 5.11583 12.3921 5.17204 13.337 5.25637C14.0815 5.31259 14.8546 5.39691 15.5991 5.45313C15.7996 5.48124 15.9141 5.59368 16 5.76233C16 5.81855 16 5.90288 16 5.95909Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span className="serviceRating">4.8 (2k)</span>
                              </div>
                            </div>
                            <h3 className="serviceTitle fw-semibold">
                              <a href="">Nas Digital Agency Website Design</a>
                            </h3>
                            <div className="d-flex align-items-center serviceCardOwner">
                              <img src="" className="serviceCardOwnerImg" alt="" />
                              <a href="#" className="serviceCardOwnerName">
                                Nankathan
                              </a>
                            </div>
                          </div>
                        </div>  
                    </div>
                    <div className="swiperSlide col-xl-4 col-md-6 " >
                        <div className="serviceCard bg-white">
                          <div className="position-relative">
                            <img
                              src="../../../public/Images/cta-bg.png"
                              height={180}
                              className="viewCardImg w-100"
                              alt=""
                            />
                            <button className="serviceCardBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <circle cx={16} cy={16} r={16} fill="white" />
                                <path
                                  d="M16.68 9.51314L16 10.2438L15.3199 9.51315C13.442 7.49562 10.3974 7.49562 8.5195 9.51314C6.64161 11.5307 6.64161 14.8017 8.5195 16.8192L14.6399 23.3947C15.391 24.2018 16.6089 24.2018 17.3601 23.3947L23.4804 16.8192C25.3583 14.8017 25.3583 11.5307 23.4804 9.51314C21.6026 7.49562 18.5579 7.49562 16.68 9.51314Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="serviceCardContent">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="serviceCardPrice  fw-bold">$15</h3>
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={15}
                                  viewBox="0 0 16 15"
                                  fill="none"
                                >
                                  <path
                                    d="M16 5.95909C15.8855 6.07153 15.7709 6.21207 15.6564 6.32451C14.4537 7.36454 13.2511 8.37646 12.0484 9.38838C11.9339 9.47271 11.9053 9.55704 11.9625 9.69758C12.3348 11.2717 12.707 12.8739 13.0793 14.448C13.1365 14.6448 13.1079 14.8134 12.9361 14.9258C12.7643 15.0383 12.5925 15.0102 12.4207 14.9258C10.989 14.0826 9.58587 13.2393 8.15415 12.396C8.03961 12.3117 7.9537 12.3117 7.83917 12.396C6.43607 13.2393 5.00435 14.0826 3.60126 14.8977C3.48672 14.9821 3.34355 15.0102 3.20038 14.9821C2.9713 14.9258 2.85676 14.701 2.91403 14.448C3.14311 13.5204 3.34355 12.5928 3.57262 11.6652C3.74443 10.9906 3.8876 10.316 4.05941 9.64136C4.08805 9.52893 4.05941 9.47271 3.97351 9.38838C2.74222 8.34835 1.53957 7.30832 0.308291 6.26829C0.251022 6.21207 0.193753 6.18396 0.165118 6.12775C0.0219457 6.01531 -0.0353233 5.87477 0.0219457 5.678C0.0792147 5.50935 0.222387 5.42502 0.394194 5.39691C0.651905 5.36881 0.909615 5.3407 1.19596 5.3407C2.36998 5.22826 3.54399 5.14393 4.74664 5.0315C4.97572 5.00339 5.20479 4.97528 5.43387 4.97528C5.54841 4.97528 5.60567 4.91906 5.63431 4.83474C6.2929 3.31685 6.92286 1.82708 7.58146 0.309198C7.66736 0.140545 7.75326 0.0281089 7.9537 0C8.18278 0.0562179 8.32595 0.140545 8.41186 0.365416C8.75547 1.15247 9.09908 1.96762 9.4427 2.75467C9.75768 3.4574 10.044 4.18823 10.359 4.89095C10.3876 4.97528 10.4449 5.0315 10.5594 5.0315C11.4757 5.11583 12.3921 5.17204 13.337 5.25637C14.0815 5.31259 14.8546 5.39691 15.5991 5.45313C15.7996 5.48124 15.9141 5.59368 16 5.76233C16 5.81855 16 5.90288 16 5.95909Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span className="serviceRating">4.8 (2k)</span>
                              </div>
                            </div>
                            <h3 className="serviceTitle fw-semibold">
                              <a href="">Nas Digital Agency Website Design</a>
                            </h3>
                            <div className="d-flex align-items-center serviceCardOwner">
                              <img src="" className="serviceCardOwnerImg" alt="" />
                              <a href="#" className="serviceCardOwnerName">
                                Nankathan
                              </a>
                            </div>
                          </div>
                        </div>  
                    </div>
                    <div className="swiperSlide col-xl-4 col-md-6 " >
                        <div className="serviceCard bg-white">
                          <div className="position-relative">
                            <img
                              src="../../../public/Images/cta-bg.png"
                              height={180}
                              className="viewCardImg w-100"
                              alt=""
                            />
                            <button className="serviceCardBtn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <circle cx={16} cy={16} r={16} fill="white" />
                                <path
                                  d="M16.68 9.51314L16 10.2438L15.3199 9.51315C13.442 7.49562 10.3974 7.49562 8.5195 9.51314C6.64161 11.5307 6.64161 14.8017 8.5195 16.8192L14.6399 23.3947C15.391 24.2018 16.6089 24.2018 17.3601 23.3947L23.4804 16.8192C25.3583 14.8017 25.3583 11.5307 23.4804 9.51314C21.6026 7.49562 18.5579 7.49562 16.68 9.51314Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="serviceCardContent">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h3 className="serviceCardPrice  fw-bold">$15</h3>
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={15}
                                  viewBox="0 0 16 15"
                                  fill="none"
                                >
                                  <path
                                    d="M16 5.95909C15.8855 6.07153 15.7709 6.21207 15.6564 6.32451C14.4537 7.36454 13.2511 8.37646 12.0484 9.38838C11.9339 9.47271 11.9053 9.55704 11.9625 9.69758C12.3348 11.2717 12.707 12.8739 13.0793 14.448C13.1365 14.6448 13.1079 14.8134 12.9361 14.9258C12.7643 15.0383 12.5925 15.0102 12.4207 14.9258C10.989 14.0826 9.58587 13.2393 8.15415 12.396C8.03961 12.3117 7.9537 12.3117 7.83917 12.396C6.43607 13.2393 5.00435 14.0826 3.60126 14.8977C3.48672 14.9821 3.34355 15.0102 3.20038 14.9821C2.9713 14.9258 2.85676 14.701 2.91403 14.448C3.14311 13.5204 3.34355 12.5928 3.57262 11.6652C3.74443 10.9906 3.8876 10.316 4.05941 9.64136C4.08805 9.52893 4.05941 9.47271 3.97351 9.38838C2.74222 8.34835 1.53957 7.30832 0.308291 6.26829C0.251022 6.21207 0.193753 6.18396 0.165118 6.12775C0.0219457 6.01531 -0.0353233 5.87477 0.0219457 5.678C0.0792147 5.50935 0.222387 5.42502 0.394194 5.39691C0.651905 5.36881 0.909615 5.3407 1.19596 5.3407C2.36998 5.22826 3.54399 5.14393 4.74664 5.0315C4.97572 5.00339 5.20479 4.97528 5.43387 4.97528C5.54841 4.97528 5.60567 4.91906 5.63431 4.83474C6.2929 3.31685 6.92286 1.82708 7.58146 0.309198C7.66736 0.140545 7.75326 0.0281089 7.9537 0C8.18278 0.0562179 8.32595 0.140545 8.41186 0.365416C8.75547 1.15247 9.09908 1.96762 9.4427 2.75467C9.75768 3.4574 10.044 4.18823 10.359 4.89095C10.3876 4.97528 10.4449 5.0315 10.5594 5.0315C11.4757 5.11583 12.3921 5.17204 13.337 5.25637C14.0815 5.31259 14.8546 5.39691 15.5991 5.45313C15.7996 5.48124 15.9141 5.59368 16 5.76233C16 5.81855 16 5.90288 16 5.95909Z"
                                    fill="currentColor"
                                  />
                                </svg>
                                <span className="serviceRating">4.8 (2k)</span>
                              </div>
                            </div>
                            <h3 className="serviceTitle fw-semibold">
                              <a href="">Nas Digital Agency Website Design</a>
                            </h3>
                            <div className="d-flex align-items-center serviceCardOwner">
                              <img src="" className="serviceCardOwnerImg" alt="" />
                              <a href="#" className="serviceCardOwnerName">
                                Nankathan
                              </a>
                            </div>
                          </div>
                        </div>  
                    </div>
                   
                    
                   
                   
                  </div>
                </div>


                {/* Portfolio */}
                <div
                  className="tab-pane fade"
                  id="nav-portfolio"
                  role="tabpanel"
                  aria-labelledby="nav-portfolio-tab"
                  tabIndex={0}
                >
                  <div className="row g-4">
                    <article className="col-xl-4 col-md-6">
                      <div className="bg-white p-2 portfolioCard">
                        <img
                          src="/assets/images/1.png"
                          className="img-fluid w-100"
                          alt=""
                        />
                        <div className="portfolioCardOverlay">
                          <a
                            href="assets/img/freelancer/p-xl.jpeg"
                            className="portfolioCardIcon gallery"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={39}
                              height={39}
                              viewBox="0 0 39 39"
                              fill="none"
                            >
                              <path
                                d="M37.2245 24.8216C36.4083 24.8216 35.7486 25.4813 35.7486 26.2975V33.1708L23.8381 21.2588C23.5503 20.971 23.1725 20.8264 22.7946 20.8264C22.4168 20.8264 22.039 20.971 21.7512 21.2588C21.1741 21.8359 21.1741 22.7686 21.7512 23.3457L33.6602 35.2562H26.7899C25.9737 35.2562 25.314 35.9159 25.314 36.7321C25.314 37.5483 25.9737 38.208 26.7899 38.208H37.2245C38.0406 38.208 38.7004 37.5483 38.7004 36.7321V26.2975C38.7004 25.4828 38.0406 24.8216 37.2245 24.8216Z"
                                fill="white"
                              />
                              <path
                                d="M5.20277 2.95179H12.0745C12.8907 2.95179 13.5504 2.29207 13.5504 1.4759C13.5504 0.659726 12.8907 0 12.0745 0H1.63996C0.823788 0 0.164062 0.659726 0.164062 1.4759V11.9105C0.164062 12.7267 0.823788 13.3864 1.63996 13.3864C2.45613 13.3864 3.11586 12.7267 3.11586 11.9105V5.03871L15.1916 17.1145C15.7687 17.6916 16.7015 17.6916 17.2786 17.1145C17.8556 16.5374 17.8556 15.6047 17.2786 15.0276L5.20277 2.95179Z"
                                fill="white"
                              />
                              <path
                                d="M15.9057 20.8264C15.5279 20.8264 15.1501 20.971 14.8623 21.2588L2.95179 33.1708V26.2975C2.95179 25.4813 2.29207 24.8216 1.4759 24.8216C0.659726 24.8216 0 25.4813 0 26.2975V36.7321C0 37.5483 0.659726 38.208 1.4759 38.208H11.9105C12.7267 38.208 13.3864 37.5483 13.3864 36.7321C13.3864 35.9159 12.7267 35.2562 11.9105 35.2562H5.04019L16.9492 23.3457C17.5263 22.7686 17.5263 21.8359 16.9492 21.2588C16.6614 20.971 16.2836 20.8264 15.9057 20.8264Z"
                                fill="white"
                              />
                              <path
                                d="M23.51 17.1145L35.5857 5.03871V11.9105C35.5857 12.7267 36.2455 13.3864 37.0616 13.3864C37.8778 13.3864 38.5375 12.7267 38.5375 11.9105V1.4759C38.5375 0.659726 37.8778 0 37.0616 0H26.6271C25.8109 0 25.1512 0.659726 25.1512 1.4759C25.1512 2.29207 25.8109 2.95179 26.6271 2.95179H33.4988L21.423 15.0276C20.846 15.6047 20.846 16.5374 21.423 17.1145C22.0001 17.6916 22.9344 17.6901 23.51 17.1145Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                    
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <a href="#" className="wbtnsecondarylg">
                      See More Works
                      <svg
                        width={14}
                        height={10}
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9L13 5M13 5L9 1M13 5L1 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
