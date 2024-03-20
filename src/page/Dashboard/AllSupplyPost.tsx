import { DeleteOutlined } from "@ant-design/icons";
import EditModal from "../../component/EditModal";
import { FormInputs2 } from "../../types/Types";
import {
  useDeleteSupplyMutation,
  useGetSupplyQuery,
} from "../AllPost/SupplyApi/AllSupplyApi";
import Spinner from "../../component/Spinner";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllSupplyPost = () => {
  const { data, isLoading } = useGetSupplyQuery("");
  const [deleteSupply] = useDeleteSupplyMutation();
  if (isLoading) {
    return <Spinner />;
  }
  const handleDelete = (id: string) => {
    // -------------------------------
    Swal.fire({
      title: "Are you sure for delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupply(id._id);
      }
    });
    // -------------------------------
  };
  const isData = data?.data.length > 0;
  return (
    <div className="relative overflow-x-auto shadow-xl h-screen sm:rounded-xl">
      {isData ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b-slate-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((supplypost: FormInputs2) => (
              <tr
                key={supplypost._id}
                className=" bg-white hover:border-x-4 px-4 border-b dark:bg-gray-800 dark:border-gray-700 hover:rounded-xl dark:hover:bg-gray-600"
              >
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
                  ${supplypost.amount}
                </td>
                <td className="px-6 py-4">
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
                      onClick={() => handleDelete(supplypost)}
                      type="button"
                      className="px-3 py-1 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-xl hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <h2 className="text-center text-2xl text-red-500 font-bold ">
            No Item no item created
          </h2>
          <div className="flex justify-center">
            <Link
              to="/dashboard/create-supply"
              className="hover:text-black hover:bg-green-300 text-center text-xl mt-5 bg-green-500 px-4 py-2 text-white rounded-xl"
            >
              Create Supply
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AllSupplyPost;
