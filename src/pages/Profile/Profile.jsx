import { Link, useParams } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import Loader from "../../components/Loading/Loader";
import Freelancer from "./Freelancer";
import Client from "./Client";
export default function Profile() {
  const accountType = localStorage.getItem("user_role");
  return <>{accountType === "Freelancer" ? <Freelancer /> : <Client />}</>
}
 
