import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import ShareOnSocial from "react-share-on-social";
import { FaRegShareSquare } from "react-icons/fa";
import logo from "./../../Assest/logo.svg";

export default function Client() {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const url = window.location.to;


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `http://localhost:5140/api/Client/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result?.result);
        console.log("result", result)
      } catch (error) {
        setIsError(true);
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [userId]);

  console.log("data", data);

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
          <div className="d-flex flex-column gap-4">
            <div className="p-4 rounded-4 bg-white position-relative">
              <div className="jobTypeBadge position-absolute d-flex flex-column gap-2">
                <p className="jobTypeBadgeTertiary">Top Seller</p>
                <p className="jobTypeBadgeSecondary">$90/hr</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center py-4">
                <img
                  src={data?.imageUrl}
                  style={{ width: 110, height: 110 }}
                  className="rounded-circle mb-4"
                  alt=""
                />
                <h3
                  style={{ fontSize: 24 }}
                  className="fw-bold textDark300 mb-2"
                >
                  {data?.name}
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
              <ShareOnSocial
                textToShare={url}
                link={url}
                linkTitle={data?.name}
                // linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
                linkFavicon={logo}
                noReferer
              >
                <button className="wbtnsecondarylg w-100">
                  Share Profile
                  <FaRegShareSquare />
                </button>
              </ShareOnSocial>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
