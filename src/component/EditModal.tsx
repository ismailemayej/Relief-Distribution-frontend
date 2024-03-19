/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetSingleSupplyQuery,
  useUpdateSupplyMutation,
} from "../page/AllPost/SupplyApi/CreateSupplyApi";
import { FormInputs2 } from "../types/Types";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner from "./Spinner";

export default function EditModal({ props }: any) {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading } = useGetSingleSupplyQuery(props._id);
  const navigate = useNavigate();
  const [UpdateSupply] = useUpdateSupplyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs2>();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleUpdate = async (data: FormInputs2) => {
    try {
      const supplyPost = {
        title: data.title,
        image: data.image,
        amount: data.amount,
        description: data.description,
        category: data.category,
      };
      await UpdateSupply({ id: props._id, body: supplyPost }).unwrap();
      navigate("/dashboard/allsupplypost");
      setShowModal(false);
      toast.success("Supply updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <FormOutlined />
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center flex w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
                <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(handleUpdate)}
                >
                  <div className="rounded-xl shadow-sm-space-y-px">
                    <div>
                      <label htmlFor="title" className="sr-only">
                        title
                      </label>
                      <input
                        {...register("title", { required: true })}
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        required
                        defaultValue={data.title}
                        className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="title Here"
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                          title is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="image" className="sr-only">
                        image
                      </label>
                      <input
                        {...register("image", { required: true })}
                        id="image"
                        name="image"
                        type="text"
                        autoComplete="image"
                        defaultValue={data.image}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                        placeholder="image Link here"
                      />
                      {errors.image && (
                        <p className="text-red-500 text-sm mt-1">
                          image is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="category" className="sr-only">
                        category
                      </label>
                      <input
                        {...register("category", { required: true })}
                        id="category"
                        name="category"
                        type="category"
                        autoComplete="category"
                        defaultValue={data.category}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                        placeholder="category"
                      />
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">
                          category is required
                        </p>
                      )}
                      <label htmlFor="amount" className="sr-only">
                        amount
                      </label>
                      <input
                        {...register("amount", { required: true })}
                        id="amount"
                        name="amount"
                        type="amount"
                        autoComplete="amount"
                        defaultValue={data.amount}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                        placeholder="amount"
                      />
                      {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">
                          amount is required
                        </p>
                      )}
                      <label htmlFor="description" className="sr-only">
                        description
                      </label>
                      <input
                        {...register("description", { required: true })}
                        id="description"
                        name="description"
                        type="description"
                        autoComplete="description"
                        defaultValue={data.description}
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                        placeholder="description"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                          description is required
                        </p>
                      )}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-yellow-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
                ;
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
