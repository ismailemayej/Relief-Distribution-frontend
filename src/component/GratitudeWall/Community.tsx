import {
  useCommunitywallgetQuery,
  useCommunitywallMutation,
} from "@/Redux/Api/communityApi";
import { userDetails } from "@/Redux/AuthSlice";
import { useAppSelector } from "@/Redux/Hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type CommentInputs = {
  comment: string;
  name: string;
};

const Community = () => {
  const { data, refetch } = useCommunitywallgetQuery("");
  const commentData = data?.data;
  const user = useAppSelector(userDetails);
  const [communitywall] = useCommunitywallMutation();
  const commentsEndRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentInputs>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: CommentInputs) => {
    try {
      const date = new Date();
      const newData = {
        ...data,
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
      };
      await communitywall(newData).unwrap();
      toast.success("Comment added successfully!");
      reset();
      refetch();
    } catch (error) {
      toast.error("Failed to add comment. Please try again.");
    }
  };

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commentData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Heading
          title="Community Gratitude Wall"
          subTitle="Share your appreciation and read messages from others"
        />

        {/* Comments Grid */}
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12">
          {commentData?.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
            >
              <div className="card-body p-6">
                <div className="flex items-center mb-3">
                  <div className="avatar placeholder">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="font-semibold">
                        {item.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h2 className="card-title text-lg font-semibold text-gray-800">
                      {item.name || "Anonymous"}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {item.date} at {item.time}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {item.commnet}
                </p>
              </div>
            </motion.div>
          ))}
          <div ref={commentsEndRef} />
        </div>

        {/* Comment Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-3xl mx-auto"
        >
          <Heading
            title="Leave Your Comment"
            subTitle="Share your thoughts with the community"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                id="name"
                type="text"
                className={`block w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-300" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
                placeholder="Your name"
                disabled={!!user.name}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <textarea
                {...register("comment", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                })}
                id="comment"
                rows={4}
                className={`block w-full px-4 py-3 rounded-lg border ${
                  errors.comment ? "border-red-300" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
                placeholder="Share your appreciation or thoughts..."
              />
              {errors.comment && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.comment.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Posting...
                  </>
                ) : (
                  "Post Comment"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
