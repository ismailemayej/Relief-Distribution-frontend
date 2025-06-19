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
    <section className="bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Heading
          title="RELIEF GOODS POST"
          subTitle="Discover available relief goods and contribute to those in need"
        />

        {isSuccess && (
          <div className="flex justify-end mt-6">
            <Link
              to="/relief-goods"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            >
              See All Posts
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {data?.data?.slice(0, 8)?.map((news: any, index: number) => (
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
      </div>
    </section>
  );
};

export default Post;
