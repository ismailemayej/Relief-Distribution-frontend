/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useCommunitywallgetQuery,
  useCommunitywallMutation,
} from "@/Redux/Api/communityApi";
import { userDetails } from "@/Redux/AuthSlice";
import { useAppSelector } from "@/Redux/Hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Heading from "../Heading";
type commentsInputs = {
  commnet: string;
  name: string;
};

const Community = () => {
  const { data } = useCommunitywallgetQuery("");
  const commentData = data?.data;
  const user = useAppSelector(userDetails);
  const [communitywall] = useCommunitywallMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<commentsInputs>();
  const onSubmit = (data: commentsInputs) => {
    const date = new Date();
    const newData = {
      ...data,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    communitywall(newData);
    toast.success("Comment added successfully");
    reset();
  };

  return (
    <div>
      <Heading title="Community Gratitude Wall" subTitle="" />
      {commentData?.map((item: any) => (
        <div className="border lg:w-[50%] rounded-xl my-2 ">
          <h2 className="text-2xl bg-slate-100 rounded-t-xl px-2 flex items-center py-1 text-blue-800 font-semibold">
            {item.name}
          </h2>
          <p className="bg-slate-50 px-2 text-sm text-gray-500">
            {item.date}.{item.time}
          </p>
          <hr />
          <p className="px-2 py-3 lg:w-[50%]">
            <span className="w-[100%] font-semibold">{item.commnet}</span>{" "}
          </p>
        </div>
      ))}
      <div className="flex justify-center">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[50%]"
        >
          <Heading title="Comment" subTitle="" />
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
            {errors.commnet && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <div>
            <label htmlFor="title" className="sr-only">
              Type your Commnet
            </label>
            <input
              {...register("commnet", { required: true })}
              id="commnet"
              name="commnet"
              type="text"
              autoComplete="commnet"
              required
              className=" appearance-none rounded-xl text-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="commnet Here"
            />
            {errors.commnet && (
              <p className="text-red-500 text-sm mt-1">title is required</p>
            )}
          </div>
          <button
            className="btn w-full border-t-indigo-700 mb-5 bg-orange-300  text-xl font-semibold px-5 py-2 rounded-xl mt-1 flex justify-center"
            type="submit"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Community;
