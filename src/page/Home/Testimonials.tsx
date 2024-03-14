import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialData } from "../../component/TestimonialDatas";
import Heading from "../../component/Heading";

const Testimonials = () => {
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
        {TestimonialData.map((r) => (
          <div className="slider-container border hover:bg-[#3461FF] hover:transition-shadow hover:text-white text-black pt-5 rounded-xl bg-white h-[312px] w-full mt-3">
            <div className="flex">
              <img
                className="rounded-full h-[50px] ml-1 w-[50px]"
                src={r.profileImage}
                alt=""
              />
              <span className="pl-3">
                <h3 className="text-[20px] font-medium">{r.name}</h3>
                <p className="text-[15px]">{r.position}</p>
              </span>
            </div>
            <p className="mt-5 px-5">{r.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
