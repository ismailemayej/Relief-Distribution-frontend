import { DeleteOutlined } from "@ant-design/icons";
import EditModal from "../../component/EditModal";
import { FormInputs2 } from "../../types/Types";
import { useGetSupplyQuery } from "../AllPost/SupplyApi/AllSupplyApi";
import { Link } from "react-router-dom";
const AllSupplyPost = () => {
  const { data, isLoading } = useGetSupplyQuery("");
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-xl sm:rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase border-b-slate-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {data?.data?.map((supplypost: FormInputs2) => (
          <tbody>
            <tr className=" bg-slate-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 hover:rounded-xl dark:hover:bg-gray-600">
              <td className="p-4">
                <img
                  src={supplypost.image}
                  className="w-16 md:w-32 max-w-full rounded-xl border max-h-full"
                  alt={supplypost.title}
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {supplypost.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">{supplypost.category}</div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {supplypost.amount}
              </td>
              <td className="px-6 py-4">
                <Link
                  to="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  <div
                    className="inline-flex mr-2 rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-3 py-1 rounded-s-xl text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <EditModal props={supplypost} />
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-xl hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllSupplyPost;
