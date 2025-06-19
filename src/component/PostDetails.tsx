import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetpostQuery } from "../Redux/Api/getPost";
import Spinner from "./Spinner";
import { useAppSelector } from "@/Redux/Hooks";
import { userDetails } from "@/Redux/AuthSlice";
import AlartModal from "./alartModal";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Post {
  title: string;
  description: string;
  image: string;
  category: string;
  amount: number;
}

const PostDetails: React.FC = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const { data, isLoading, error } = useGetpostQuery("");
  const user = useAppSelector(userDetails);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    toast.error("Failed to load post details");
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-red-600">
          Error loading post details
        </h2>
      </div>
    );
  }

  const PostDetails: Post[] | undefined = data?.data?.filter(
    (post: Post) => post.title === id
  );

  if (!PostDetails || PostDetails.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">Post not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { title, description, image, category, amount } = PostDetails[0];

  const handleModal = () => {
    if (user?.name) {
      setOpenModal(true);
    } else {
      toast.info("Please login to donate");
      navigate("/login");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="lg:flex">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                {category}
              </span>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center mb-6"
            >
              <div className="text-2xl font-bold text-blue-600 mr-2">
                ${amount}
              </div>
              <div className="text-gray-500">needed</div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="prose max-w-none text-gray-700 mb-8"
            >
              <p className="whitespace-pre-line">{description}</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleModal}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Donate Now
              </button>
              <button
                onClick={() => navigate(-1)}
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Posts
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {openModal && (
        <AlartModal
          modal={setOpenModal}
          postinfo={PostDetails[0]}
          user={user}
        />
      )}
    </motion.div>
  );
};

export default PostDetails;
