import {Link, useNavigate} from 'react-router-dom'
import { MdAddToPhotos } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoBagRemoveSharp } from "react-icons/io5";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Auth';
import { useContext } from 'react';
import { BsPersonFill } from "react-icons/bs";






function Sidebar({active}) {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

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
              to="/admin"
              className={
                active === "dashboard"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <RiHome3Fill style={{ width: "20px", height: "20px" }} />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/allCategory"
              className={
                active === "category"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <BiSolidCategoryAlt style={{ width: "20px", height: "20px" }} />
              All Categories
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/viewallusers"
              className={
                active === "users" ? "sidebarNavLink active" : "sidebarNavLink"
              }
            >
              <BsPersonFill style={{ width: "20px", height: "20px" }} />
              All users
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/postCategory"
              className={
                active === "addcategory"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <MdAddToPhotos style={{ width: "20px", height: "20px" }} />
              Add Category
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link
              to="/projects"
              className={
                active === "projects"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <IoBagRemoveSharp style={{ width: "20px", height: "20px" }} />
              All Project
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/postSkill"
              className={
                active === "skill" ? "sidebarNavLink active" : "sidebarNavLink"
              }
            >
              <IoMdAddCircle style={{ width: "20px", height: "20px" }} />
              Add Skill
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <button
              className="sidebarNavLink"
              type="button"
              // data-bs-toggle="modal"
              // data-bs-target="#logoutModal"
              onClick={logout}
            >
              <FaSignOutAlt style={{ width: "20px", height: "20px" }} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;
