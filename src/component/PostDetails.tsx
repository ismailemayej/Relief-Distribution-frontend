/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetpostQuery } from "../Redux/Api/getPost";
import Modal from "./Modal";
const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetpostQuery("");
  if (isLoading) {
    return <p>Loading</p>;
  }

  const PostDetails = data?.data?.filter((post: any) => post?.title === id);
  console.log(data, "data");
  const { title, description, image, category } = PostDetails[0];

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <img
          src={image}
          alt="Relief Item Image"
          className="w-full lg:w-8/12 lg:h-8/12 rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Title: {title}</h2>
        <p className="text-gray-700 text-lg font-semibold mb-2">
          Category:{category}
        </p>
        <p className="text-gray-700 text-lg lg:w-8/12 mb-4">{description}</p>
        <Modal />
      </div>
    </div>
  );
};

export default PostDetails;
