/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGetpostQuery } from "../../Redux/Api/getPost";
import Heading from "../../component/Heading";
import Spinner from "@/component/Spinner";

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
        {data?.data?.map((news: any) => (
          <div
            key={news.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl duration-300 hover:-translate-y-1 transform transition"
          >
            <Link to={`/relief-goods/${news.title}`} className="block">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  src={news.image}
                  alt={news.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
            </Link>

            <div className="p-6">
              <Link to={`/relief-goods/${news.title}`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
              </Link>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600 font-medium">
                    ${news.amount} raised
                  </span>
                </div>

                <Link
                  to={`/relief-goods/${news.title}`}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                >
                  Donate Now
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (news.donatedAmount / news.amount) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
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
