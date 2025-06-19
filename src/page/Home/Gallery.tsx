/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Heading from "../../component/Heading";
import { useGetGalleryDataQuery } from "../../Redux/Api/getGalleryImage";
import useScrollGrow from "@/Hook/ScrollGrowHook";

const Gallery = () => {
  const { data } = useGetGalleryDataQuery("");
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.section
      style={style}
      ref={componentRef}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <Heading title="Gallery" subTitle="Moments captured from our events" />

      <div className="grid gap-2 mt-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-[200px] lg:auto-rows-[300px]">
        {data?.data?.map((item: any, i: number) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl group shadow-sm border ${
              i === 0 || i === 1 || i === 5 || i === 2 ? "lg:col-span-2" : ""
            } ${i === 2 ? "lg:row-span-2" : ""}`}
          >
            <img
              src={item.image}
              alt={item.EventName || "Gallery Image"}
              className="w-full h-full object-cover transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
