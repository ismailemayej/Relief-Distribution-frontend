/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetpostQuery } from "../Redux/Api/getPost";
import Modal from "./Modal";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetpostQuery("");
  if (isLoading) {
    <p>Loading</p>;
  }

  const PostDetails = data?.data?.filter((post: any) => post?.headline === id);
  const { headline, news, blogimgurl, catgory } = PostDetails[0];

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <img
          src={blogimgurl}
          alt="Relief Item Image"
          className="w-full lg:w-8/12 lg:h-8/12 rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Title: {headline}</h2>
        <p className="text-gray-700 text-lg font-semibold mb-2">
          Category:{catgory}
        </p>
        {/* <p className="text-gray-700 text-lg mb-2">Amount: {amount}</p> */}
        <p className="text-gray-700 text-lg lg:w-8/12 mb-4">{news}</p>
        <Modal name="Donate" details="are you sure want Donate?" />
      </div>
    </div>
  );
};

export default PostDetails;
