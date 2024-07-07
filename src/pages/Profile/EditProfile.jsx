import React from "react";

import Freelancer from "./FreeEdite";
import Client from "./ClientEdit";
function EditProfile(){
  const accountType  = localStorage.getItem("user_role");
  return <>{accountType === "Freelancer" ? <Freelancer /> : <Client />}</>;
}


export default EditProfile;
