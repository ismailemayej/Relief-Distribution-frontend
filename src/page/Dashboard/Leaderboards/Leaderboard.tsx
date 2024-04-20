/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "@/component/Heading";
import { useGetSupplyQuery } from "@/page/AllPost/SupplyApi/AllSupplyApi";

const Leaderboard = () => {
  // const onSubmit = async (data: any) => {
  //   const numberData = parseInt(data.name);
  //   setAmountData(numberData);
  // };
  // const { register, handleSubmit } = useForm();
  // const [amountData, setAmountData] = useState<number>(50);

  const { data } = useGetSupplyQuery("");
  const filteredData = data?.data?.filter((item: any) => item?.amount > 50);

  return (
    <div>
      <Heading title="TOP DONORS" subTitle="" />
      <div className=" relative flex flex-col my-3 text-gray-700 bg-white shadow-lg w-full rounded-xl bg-clip-border">
        {/* Filter by amount:
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
          <input
            {...register("name", { required: true })}
            id="name"
            name="name"
            type="number"
            className="appearance-none rounded-xl relative block w-[20%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
            placeholder=""
          />
          <button className="mt-4 py-1 px-5 h-full text-center rounded-xl bg-orange-300">
            Filter
          </button>
        </form> */}
        <hr />
        {filteredData?.map((item: any, index: number) => (
          <nav
            key={index}
            className="shadow-lg flex min-w-[100%] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"
          >
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <div>
                <h6 className="block font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  {item?.name}
                </h6>
                <p className="block font-sans text-lg antialiased font-normal leading-normal text-gray-700">
                  Donated: ${item.amount}
                </p>
              </div>
            </div>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
