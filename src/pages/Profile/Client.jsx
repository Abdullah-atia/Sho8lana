import { Link, useParams } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import Loader from "../../components/Loading/Loader";

export default function Client() {
  const { userId } = useParams();
  const { data, isLoading, isError, error } = useUserData(userId);
  console.log(data?.data.result);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
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
                  src={data?.data.result.imageUrl}
                  style={{ width: 110, height: 110 }}
                  className=" rounded-circle mb-4"
                  alt=""
                />
                <h3
                  style={{ fontSize: 24 }}
                  className="fw-bold textDark300 mb-2"
                >
                  {data?.data.result.name}
                </h3>
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
              <Link
                to={`/editProfile/${userId}`}
                className="wbtnsecondarylg w-100"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
}
