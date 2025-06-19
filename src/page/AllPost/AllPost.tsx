/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetpostQuery } from "../../Redux/Api/getPost";
import Heading from "../../component/Heading";
import Spinner from "@/component/Spinner";
import { motion } from "framer-motion";

const ALLPost = () => {
  const { data, isLoading } = useGetpostQuery("");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading
        title="RELIEF GOODS POST"
        subTitle="Discover available relief goods and contribute to those in need"
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {data?.data?.map((news: any, index: number) => (
          <motion.div
            key={news._id || index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition duration-300 flex flex-col"
          >
            <Link to={`/relief-goods/${news.title}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </Link>

            <div className="p-5 flex flex-col flex-grow">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase text-yellow-600 bg-yellow-100 dark:bg-yellow-800/40 dark:text-yellow-400 rounded-full">
                  {news.category}
                </span>
              </div>

              <Link to={`/relief-goods/${news.title}`} className="flex-grow">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {news.description ||
                    "Help support this cause with your donation"}
                </p>
              </Link>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <span className="text-md font-semibold text-blue-600 dark:text-blue-400">
                  ${news.amount} raised
                </span>
                <Link
                  to={`/relief-goods/${news.title}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="#"
          className="inline-block px-6 py-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          View All Relief Goods →
        </Link>
      </div>
    </div>
  );
};

export default ALLPost;
