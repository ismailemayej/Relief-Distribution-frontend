import ContactUs from "../../component/ContactUs";
import CenterLocation from "../../component/Location";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Post from "./Post";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Post />
      <Testimonials />
      <Gallery />
      <CenterLocation />
      <ContactUs />
    </div>
  );
};

export default Home;
