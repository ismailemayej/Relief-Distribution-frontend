import { Outlet } from "react-router-dom";
// import UserDashboard from "../page/Dashboard/UserDashboard";
import Footer from "../page/Footer/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
