/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAddTestimonialMutation } from "@/Redux/Api/testimonialApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const [addTestimonial] = useAddTestimonialMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    try {
      const newData = {
        name: data.name,
        position: data.position,
        review: data.review,
      };
      toast.success("testimonial added succesfully");
      addTestimonial(newData);
      reset();
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="mx-auto lg:w-[50%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            {...register("name", { required: true })}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className=" appearance-none my-2  rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Name Here"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">title is required</p>
          )}
        </div>
        <div>
          <label htmlFor="position" className="sr-only">
            Your position
          </label>
          <input
            {...register("position", { required: true })}
            id="position"
            name="position"
            type="text"
            autoComplete="position"
            required
            className=" appearance-none my-2 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Position Here"
          />
          {errors.position && (
            <p className="text-red-500 text-sm mt-1">title is required</p>
          )}
        </div>
        <div>
          <label htmlFor="review" className="sr-only">
            Your Testimonial
          </label>
          <input
            {...register("review", { required: true })}
            id="review"
            type="text"
            name="review"
            autoComplete="review"
            required
            className=" appearance-none my-2 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Review Here"
          />
          {errors.review && (
            <p className="text-red-500 text-sm mt-1">title is required</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-300 font-semibold text-lg w-full px-4 py-2 rounded-xl mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTestimonial;
