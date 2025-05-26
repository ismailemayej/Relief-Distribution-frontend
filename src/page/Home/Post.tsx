/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetpostQuery } from "../../Redux/Api/getPost";
import Heading from "../../component/Heading";
import { motion } from "framer-motion";
import Spinner from "@/component/Spinner";

const Post = () => {
  const { data, isLoading, isSuccess } = useGetpostQuery("");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <Heading
          title="RELIEF GOODS POST"
          subTitle="Discover available relief goods and contribute to those in need"
        />

        {isSuccess && (
          <div className="flex justify-end mt-4">
            <Link
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-600 text-white font-medium rounded-full shadow-lg transition-all duration-300"
              to="/relief-goods"
            >
              See All Posts
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {data?.data?.slice(0, 8)?.map((news: any, index: number) => (
          <motion.div
            key={news._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 flex flex-col h-full"
          >
            <Link to={`/relief-goods/${news.title}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src={news.image}
                  alt={news.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-yellow-500 uppercase bg-yellow-100 rounded-full dark:bg-yellow-800/50">
                  {news.category}
                </span>
              </div>

              <Link to={`/relief-goods/${news.title}`} className="flex-grow">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
                  {news.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                  {news.description ||
                    "Help support this cause with your donation"}
                </p>
              </Link>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    ${news.amount} raised
                  </span>
                </div>
                <Link
                  to={`/relief-goods/${news.title}`}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Post;
