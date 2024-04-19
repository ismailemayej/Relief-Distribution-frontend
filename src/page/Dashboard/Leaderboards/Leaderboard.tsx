/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "@/component/Heading";
import { useGetSupplyQuery } from "../../AllPost/SupplyApi/AllSupplyApi";
import { useAppSelector } from "@/Redux/Hooks";
const Leaderboard = () => {
  const user = useAppSelector((state) => state.auth);
  console.log("this is user data", user?.name);
  const { data, isLoading } = useGetSupplyQuery("");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Heading title="TOP DONORS" subTitle="" />
      <div className=" relative flex flex-col my-3 text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
        {data.data.map((item: any) => (
          <nav className="flex min-w-[100%] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <div className="grid mr-4 place-items-center">
                <img
                  alt="emma"
                  src="https://docs.material-tailwind.com/img/face-3.jpg"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="block font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  {item?.doner?.email}
                </h6>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                  UI/UX Designer @ Material Tailwind
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
