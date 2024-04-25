/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FormInputs2 } from "../types/Types";
import { useCrateSupplyMutation } from "../page/AllPost/SupplyApi/CreateSupplyApi";
import Spinner from "./Spinner";
import { useAppSelector } from "@/Redux/Hooks";
import { userDetails } from "../Redux/AuthSlice";

const CreateSupply = () => {
  const user = useAppSelector(userDetails);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs2>();
  const navigate = useNavigate();

  const [CrateSupply, { isLoading }] = useCrateSupplyMutation();
  if (isLoading) {
    return <Spinner />;
  }
  const onSubmit = (data: FormInputs2) => {
    try {
      const donarInfo = {
        donarName: user.name,
        donarEmail: user.email,
      };
      console.log(donarInfo);
      const SupplyPost = {
        doner: donarInfo,
        title: data.title,
        image: data.image,
        amount: data.amount,
        description: data.description,
        category: data.category,
      };
      CrateSupply(SupplyPost);
      navigate("/dashboard/allsupplypost");
      toast.success("Supply Create successfully");
    } catch (error) {
      console.log(error);
      toast.error("something is wrong");
    }
  };

  return (
    <div className="min-h-screen flex border items-center justify-center px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Create Supply Post
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                className=" appearance-none  rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="title Here"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">title is required</p>
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
                required
                className="appearance-none rounded-xl  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                placeholder="image Link here"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">image is required</p>
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
                required
                className="appearance-none input input-bordered relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
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
                type="number"
                autoComplete="amount"
                required
                className="appearance-none input input-bordered  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                placeholder="amount"
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">amount is required</p>
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
                required
                className="appearance-none input input-bordered relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                placeholder="description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  description is required
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group rounded-xl relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSupply;
