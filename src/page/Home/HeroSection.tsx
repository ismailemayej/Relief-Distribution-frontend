import { motion } from "framer-motion";
import reliefsGood from "../../assets/reliefs good.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="grid lg:flex lg:flex-row-reverse lg:grid-cols-12 mt-2 grid-cols-1 items-center">
      <motion.div
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="col-span-3 w-full lg:mt-6"
      >
        <img
          src={reliefsGood}
          alt="mobile"
          className="mx-auto w-full rounded-xl"
        />
      </motion.div>
      <div className="col-span-9">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className=""
        >
          <span className="font-bold text-yellow-700 text-2xl">
            OUR MISSION & GOALS
          </span>
          <br />
          <span className="font-bold lg:text-6xl text-4xl">EDUCATION </span>
        </motion.p>
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="font-bold text-[#FE8900] lg:text-5xl text-3xl"
        >
          FOR POOR STUDENT
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="my-2 text-lg w-10/12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </motion.p>
        <Link to="/">
          <button className="lg:px-20 hover:bg-orange-800 hover:text-white hover:animate-in lg:py-2 rounded-xl py-3 px-16 lg:mb-1 mb-3 bg-yellow-500 text-black">
            Exploer
          </button>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
