import { Outlet } from "react-router-dom";
import Footer from "../page/Footer/Footer";
import Navbar from "../page/navbar/Navbar";
import Container from "../component/Container";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />

      <Container className="">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};

export default MainLayOut;
