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
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Heading title="TESTIMONIALS" subTitle="" />
      <Slider {...settings}>
        {data?.data?.map((r: any) => (
          <div className="w-full slider-container border hover:bg-slate-200 hover:transition-shadow hover:text-white text-black rounded-xl bg-white h-[312px] w-full mt-3">
            <div className="flex bg-slate-100 p-2">
              <img
                className="rounded-full border h-[50px] ml-1 w-[50px]"
                src={r.profileImage}
                alt=""
              />
              <span className="pl-3">
                <h3 className="lg:text-[25px] text-[20px] text-blue-900 font-medium">
                  {r.name}
                </h3>
                <p className="text-[15px] text-neutral-600">{r.position}</p>
              </span>
            </div>
            <hr />
            <p className="mt-5 pb-[-20] px-3 text-lg text-orange-900">
              <span>"</span>
              {r.review} <span>"</span>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
