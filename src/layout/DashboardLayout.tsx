import { Outlet } from "react-router-dom";
// import UserDashboard from "../page/Dashboard/UserDashboard";
import Footer from "../page/Footer/Footer";
import DashboradNavbar from "../component/DashboradNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboradNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
