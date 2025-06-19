import { motion } from "framer-motion";
import Heading from "@/component/Heading";
import { useGetSupplyQuery } from "@/page/AllPost/SupplyApi/AllSupplyApi";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

const Leaderboard = () => {
  const { data, isLoading, error } = useGetSupplyQuery("");
  const filteredData = data?.data
    ?.filter((item: any) => item?.amount > 50)
    ?.sort((a: any, b: any) => b.amount - a.amount);

  const getRankColor = (index: number) => {
    switch (index) {
      case 0:
        return "from-yellow-400 to-yellow-500";
      case 1:
        return "from-gray-300 to-gray-400";
      case 2:
        return "from-amber-600 to-amber-700";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaTrophy className="text-yellow-400" />;
      case 1:
        return <FaMedal className="text-gray-300" />;
      case 2:
        return <FaAward className="text-amber-600" />;
      default:
        return <span className="text-white">{index + 1}</span>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Failed to load leaderboard data</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Heading
        title="Top Donors Leaderboard"
        subTitle="Our most generous contributors"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 font-semibold">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-7">Donor Name</div>
          <div className="col-span-4 text-right">Amount Donated</div>
        </div>

        {filteredData?.length ? (
          filteredData.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-12 items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="col-span-1 flex justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${getRankColor(
                    index
                  )}`}
                >
                  {getRankIcon(index)}
                </div>
              </div>
              <div className="col-span-7 font-medium text-gray-800">
                {item?.name}
              </div>
              <div className="col-span-4 text-right font-bold text-blue-600">
                ${item.amount.toLocaleString()}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No donors found matching the criteria
          </div>
        )}
      </motion.div>

      <div className="mt-6 text-sm text-gray-500 text-center">
        Showing donors who contributed more than $50
      </div>
    </div>
  );
};

export default Leaderboard;
