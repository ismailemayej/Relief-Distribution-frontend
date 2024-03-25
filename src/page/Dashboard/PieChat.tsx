/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useGetSupplyQuery } from "../AllPost/SupplyApi/AllSupplyApi";
import Spinner from "@/component/Spinner";
const PieCharts = () => {
  const { data, isLoading } = useGetSupplyQuery("");
  if (isLoading) return <Spinner />;

  const postData = data?.data;
  const totalData = postData.length;
  const totalAmout = postData.reduce(
    (prevalue: number, curValue: { amount: string }) => {
      const sTn = prevalue + parseInt(curValue.amount);
      const total = sTn.toFixed(2);
      return Number(total);
    },
    0
  );
  const avarage = (totalAmout / totalData).toFixed(2);
  const piedata = [
    { name: "Total Data", value: totalData },
    { name: "Total Amount", value: totalAmout },
    { name: "Avarage", value: avarage },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:px-5 px-2 py-5 bg-white shadow-lg lg:text-3xl text-xl font-semibold">
        <h3 className="t text-orange-500">
          Total Donation: <span className="  text-rose-700">{totalData}</span>
        </h3>
        <h3 className="t text-orange-500">
          Total Donation Amount:{" "}
          <span className="  text-rose-700">${totalAmout}</span>
        </h3>
        <h3 className="t text-orange-500">
          Avarage Donation Amount:{" "}
          <span className="  text-rose-700">${avarage}</span>
        </h3>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={400}>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieCharts;
