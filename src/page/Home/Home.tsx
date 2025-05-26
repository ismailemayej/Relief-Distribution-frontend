import ContactUs from "../../component/ContactUs";

import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Post from "./Post";
import Testimonials from "./Testimonials";
import { LocationWithMap } from "@/component/HomeLocation";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Post />
      <Testimonials />
      <Gallery />
      <LocationWithMap
        address="Chandpur Sadar, Chandpur"
        city="chandpur"
        country="Bangladesh"
      />
      <ContactUs />
    </div>
  );
};

export default Home;
