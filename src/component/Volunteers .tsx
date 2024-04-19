/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useAddvolunteerMutation,
  useGetvolunteerQuery,
} from "@/Redux/Api/volunteerApi";
import { userDetails } from "@/Redux/AuthSlice";
import { useAppSelector } from "@/Redux/Hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type volunteerInputs = {
  name: string;
  email: string;
  number: number;
  address: string;
};

const Volunteers = () => {
  const { data } = useGetvolunteerQuery("");

  const volunteerData = data?.data;
  const user = useAppSelector(userDetails);
  const [addvolunteer] = useAddvolunteerMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<volunteerInputs>();
  const onSubmit = (data: volunteerInputs) => {
    const date = new Date();
    const newData = {
      ...data,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    addvolunteer(newData);
    toast.success("Comment added successfully");
    reset();
  };

  return (
    <div>
      {" "}
      <h3 className="text-xl font-semibold">Volunteer List</h3>
      {volunteerData?.map((item: any) => (
        <div className="border lg:w-[50%] rounded-xl my-2 ">
          <h2 className="text-xl bg-slate-100 rounded-t-xl px-2 flex items-center py-1 text-blue-800 font-semibold">
            {item.name}
          </h2>
          <p className="bg-slate-50 px-2 text-lg text-gray-500">
            Email:{item.email}
          </p>
          <p className="bg-slate-50 px-2 text-lg text-gray-500">
            Phone:{item.number}
          </p>
          <p className="px-2 py-1 bg-slate-100">
            <span className="w-[100%] font-semibold">
              Address:{item.address}
            </span>
          </p>
        </div>
      ))}
      <div className="flex justify-center">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[50%]"
        >
          {" "}
          <h3 className="text-xl font-semibold">Are want to you Volunteer?</h3>
          <div>
            <label htmlFor="title" className="sr-only">
              Type your name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className=" appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder={`${user.name || "Your name here"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <div>
            <label htmlFor="title" className="sr-only">
              Type your Email
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" appearance-none rounded-xl text-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="email Here"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <div>
            <label htmlFor="title" className="sr-only">
              Type your Phone number
            </label>
            <input
              {...register("number", { required: true })}
              id="number"
              name="number"
              type="number"
              autoComplete="number"
              required
              className=" appearance-none rounded-xl text-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="phone number Here"
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <div>
            <label htmlFor="title" className="sr-only">
              Type your Current Address
            </label>
            <input
              {...register("address", { required: true })}
              id="address"
              name="address"
              type="text"
              autoComplete="address"
              required
              className=" appearance-none rounded-xl text-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="address Here"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <button
            className="btn w-full border-t-indigo-700 mb-5 bg-orange-200 text-xl font-semibold px-5 py-2 rounded-xl mt-1 flex justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteers;
