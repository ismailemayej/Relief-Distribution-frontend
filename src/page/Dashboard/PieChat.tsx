/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSupplyQuery } from "../AllPost/SupplyApi/AllSupplyApi";
import Spinner from "@/component/Spinner";
import Charts from "./Charts";
const PieCharts = () => {
  const { data, isLoading } = useGetSupplyQuery("");
  if (isLoading) return <Spinner />;

  const postData = data?.data;
  const totalData = postData?.length;
  const totalAmout = postData?.reduce(
    (prevalue: number, curValue: { amount: string }) => {
      const sTn = prevalue + parseInt(curValue.amount);
      const total = sTn.toFixed(2);
      return Number(total);
    },
    0
  );
  const avarage = (totalAmout / totalData).toFixed(2);
  return (
    <div className="">
      <div className="lg:px-5 px-2 py-5 bg-white shadow-lg lg:text-3xl text-xl font-semibold">
        <h3 className="t text-orange-500">
          Total Donation: <span className="  text-rose-700">{totalData}</span>
        </h3>
        <h3 className="t text-orange-500">
          Total Donation Amount:
          <span className="  text-rose-700">${totalAmout || "00"}</span>
        </h3>
        <h3 className="t text-orange-500">
          Avarage Donation Amount:{" "}
          <span className="  text-rose-700">${avarage || "00"}</span>
        </h3>
      </div>

      {/* <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={piedata}
              cx="50%"
              cy="50%"
              outerRadius={130}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer> */}
      <Charts />
    </div>
  );
};

export default PieCharts;
