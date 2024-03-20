/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useGetpostQuery } from "../Redux/Api/getPost";
import Swal from "sweetalert2";
import Spinner from "./Spinner";
const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetpostQuery("");
  if (isLoading) {
    return <Spinner />;
  }
  const descriptionn =
    "We are writing on behalf of our company, Glasses for Kids, We are writing on behalf of our company, Glasses for Kids.";
  // for Modal handleing
  const handleModal = () => {
    Swal.fire({
      text: descriptionn,
      title: "Are you sure for Donate?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I am Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard/piechart");
      }
    });
  };

  const PostDetails = data?.data?.filter((post: any) => post?.title === id);
  console.log(data, "data");
  const { title, description, image, category, amount } = PostDetails[0];

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
      </div>
    </div>
  );
};

export default PostDetails;
