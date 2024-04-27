import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
// import Sidebar from './Sidebar';


function AdminDashBoard() {
  return (
  <div className="d-flex">
              <Sidebar  >
                <Menu className="main">
                  <MenuItem rootStyles = { {":hover": { backgroundColor: "var(--lime-300)"}}} > Dashboard </MenuItem>
                  <MenuItem> Add Category </MenuItem>
                  <MenuItem> Documentation </MenuItem>
                  <MenuItem> logout </MenuItem>
        
                </Menu>
              </Sidebar>
        {/* <Sidebar /> */}
      
      <div style={{ backgroundColor: "var(--off-white)" , width:"100%", padding: "0.4rem"}}>
        <div className="d-flex justify-content-between ">
          <div>
            <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>
              Dashboard
            </p>
            <p className="text-secondry">Dashboard</p>
          </div>
          <div></div>
        </div>
        <div className="d-flex flex-row justify-content-center ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;

function Card() {
  return (
    <div className="d-flex  flex-row justify-content-between p-4 bg-light w-25 rounded border border-dark m-2 ">
      <div>
        <h1 style={{ fontSize: "24px" }}>50</h1>
        <p className="text-secondary">Total jobs</p>
      </div>
      <div>
        <img src="./assets/categories/icon-2.png" alt="jobs" />
      </div>
    </div>
  );
}
