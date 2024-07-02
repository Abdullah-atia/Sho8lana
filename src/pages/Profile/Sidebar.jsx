import { Link, useNavigate } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoBagRemoveSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/Auth";
import { useContext } from "react";

function Sidebar({ active }) {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
  const userId = localStorage.getItem("user_id");

  const logout = (e) => {
    e.preventDefault();
    toast("Logout", { icon: "👏" });
    setToken(null);
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboardSidebar min-vh-100 d-none d-xl-block">
      <div className="p-4">
        <a href="buyer-dashboard.html">
          <img src="assets/img/dashboard/logo/logo-main.svg" alt="" />
        </a>
      </div>
      <ul className="sidebar-nav p-3 overflow-y-auto">
        <li className="sidebar-nav-item">
          <Link
            to={`/myProjects/${userId}`}
            className={
              active === "myProject"
                ? "sidebarNavLink active"
                : "sidebarNavLink"
            }
          >
            <RiHome3Fill style={{ width: "20px", height: "20px" }} />
            My Project
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link
            to="/proposal"
            className={
              active === "proposal" ? "sidebarNavLink active" : "sidebarNavLink"
            }
          >
            <BiSolidCategoryAlt style={{ width: "20px", height: "20px" }} />
            Proposal
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link
            to="/editProfile"
            className={
              active === "editProfile"
                ? "sidebarNavLink active"
                : "sidebarNavLink"
            }
          >
            <MdAddToPhotos style={{ width: "20px", height: "20px" }} />
            Edit Profile
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link
            to="/deleteAccount"
            className={
              active === "deleteAccount"
                ? "sidebarNavLink active"
                : "sidebarNavLink"
            }
          >
            <IoBagRemoveSharp style={{ width: "20px", height: "20px" }} />
            Delete My Account
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <button className="sidebarNavLink" type="button" onClick={logout}>
            <FaSignOutAlt style={{ width: "20px", height: "20px" }} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
