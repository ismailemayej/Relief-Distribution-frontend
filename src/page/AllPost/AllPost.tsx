import { Link } from "react-router-dom";
import { useGetpostQuery } from "../../Redux/Api/getPost";
import Heading from "../../component/Heading";
type TNews = {
  news: string;
  headline: string;
  blogimgurl: string;
  catgory: string;
  amount: string;
};

const ALLPost = () => {
  const { data, isLoading } = useGetpostQuery("");
  if (isLoading) {
    <p>Loading</p>;
  }
  return (
    <>
      <Heading title="RELIF GOOD POST" subTitle="" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {data?.data?.map((news: TNews[]) => (
          <div className="w-full lg:max-w-sm bg-white border border-gray-200 rounded-t-xl shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t-xl"
                src={news.blogimgurl}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link to="#">
                <h5 className="text-xl font-semibold tracking-tight text-blue-900 dark:text-white">
                  {news.headline}
                </h5>
              </Link>
              <span className="text-2 font-bold text-yellow-500 dark:text-white">
                Category: {news.catgory}
              </span>
              <div className="flex items-center justify-between">
                <span className="lg:text-xl text-lg font-bold text-gray-900 dark:text-white">
                  Donate Amout: {news.amount}
                </span>
                <Link
                  to={`/relief-goods/${news.headline}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1.5 text-center dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ALLPost;
