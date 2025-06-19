import { motion } from "framer-motion";
import reliefsGood from "../../assets/reliefs good.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 items-center gap-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="lg:col-span-6 col-span-12"
        >
          <img
            src={reliefsGood}
            alt="Relief Goods"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className="lg:col-span-6 col-span-12 text-left">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="text-yellow-700 font-bold text-xl uppercase tracking-wide mb-2"
          >
            Our Mission & Goals
          </motion.p>

          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Education <br />{" "}
            <span className="text-[#FE8900]">for Poor Students</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="text-gray-600 dark:text-gray-300 text-lg mb-6 w-full md:w-10/12"
          >
            We believe that education is a right, not a privilege. Our mission
            is to support underprivileged students through accessible learning
            opportunities and resources.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
          >
            <Link to="/">
              <button className="px-8 py-3 text-lg font-semibold bg-yellow-500 hover:bg-orange-600 text-white rounded-xl shadow-md transition duration-300">
                Explore
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
