import ContactUs from "../../component/ContactUs";

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
      <ContactUs />
    </div>
  );
};

export default Home;
