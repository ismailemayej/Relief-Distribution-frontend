/* eslint-disable @typescript-eslint/no-explicit-any */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../../component/Heading";
import { useGetTestimonialQuery } from "@/Redux/Api/testimonialApi";
import Spinner from "@/component/Spinner";

const Testimonials = () => {
  const { data, isLoading } = useGetTestimonialQuery("");
  if (isLoading) {
    return <Spinner />;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <Heading title="TESTIMONIALS" subTitle="What our clients say" />
        <Slider {...settings}>
          {data?.data?.map((r: any, idx: number) => (
            <div key={idx} className="px-3">
              <div className="bg-white rounded-xl shadow-md p-6 h-[280px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-semibold text-xl">
                    {r.name?.charAt(0).toUpperCase() || "V"}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    {r.name}
                  </h3>
                </div>
                <div className="text-gray-700 text-md italic px-1">
                  <span className="text-3xl text-orange-400 font-serif leading-none">
                    “
                  </span>
                  {r.review}
                  <span className="text-3xl text-orange-400 font-serif leading-none">
                    ”
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
