/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetpostQuery } from "../Redux/Api/getPost";
import Spinner from "./Spinner";
import Post from "../page/Home/Post";
import { useAppSelector } from "@/Redux/Hooks";
import { userDetails } from "@/Redux/AuthSlice";
import AlartModal from "./alartModal";
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
  const { data, isLoading } = useGetpostQuery("");
  const user = useAppSelector(userDetails);
  if (isLoading) {
    return <Spinner />;
  }
  console.log(user, "user ");
  // for Modal handling

  const PostDetails: Post[] | undefined = data?.data?.filter(
    (post: Post) => post.title === id
  );
  console.log(data, "data");
  if (!PostDetails || PostDetails.length === 0) {
    return <div>Post not found.</div>;
  }
  const { title, description, image, category, amount } = PostDetails[0];
  const handleModal = () => {
    if (user?.email) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {/* image thumb */}
        <img
          src={image}
          alt="Relief Item Image"
          className="w-full lg:w-8/12 lg:h-8/12 rounded-xl mb-4"
        />
        {/* for post Title */}
        <h2 className="text-2xl font-bold mb-2">Title: {title}</h2>
        {/* for Post category */}
        <p className="text-gray-700 text-lg font-semibold mb-2">
          Category:{category}
        </p>
        {/* Donate amount */}
        <p className="text-xl font-semibold">Amount: ${amount}</p>
        <p className="text-gray-700 text-lg lg:w-8/12 mb-4">
          <span className="font-semibold">Description:</span> {description}
        </p>
        <button
          className="bg-yellow-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleModal}
        >
          Donate
        </button>
        {openModal && (
          <AlartModal
            modal={setOpenModal}
            postinfo={PostDetails[0]}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
