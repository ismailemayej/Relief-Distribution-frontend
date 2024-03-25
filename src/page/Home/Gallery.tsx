/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Heading from "../../component/Heading";
import { useGetGalleryDataQuery } from "../../Redux/Api/getGalleryImage";
import Spinner from "../../component/Spinner";

const Gallery = () => {
  const { data, isLoading } = useGetGalleryDataQuery("");
  if (isLoading) {
    <Spinner />;
  }

  const styles = "bg-white-600 border rounded-xl  lg:p-1 p-1";
  return (
    <motion.div>
      <Heading title="GALLERY" subTitle="" />
      <>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 w-full lg:auto-rows-[300px] gap-1 lg:my-3">
          {data?.data?.map((item: any, i: number) => (
            <div
              key={i}
              className={`${styles} ${
                i === 0 || i === 1 || i === 5 || i === 2 ? "lg:col-span-2" : ""
              } ${i === 2 ? "lg:row-span-2" : ""}`}
            >
              <div className="w-full h-[100%]">
                <img
                  className="transition hover:scale-105 hover:delay-75 w-[100%] h-[100%] object-cover rounded-xl"
                  src={item.image}
                  alt={item.EventName}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    </motion.div>
  );
};

export default Gallery;
