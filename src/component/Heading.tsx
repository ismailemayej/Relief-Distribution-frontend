type THeading = {
  title: string;
  subTitle: string;
};

const Heading = ({ title, subTitle }: THeading) => {
  return (
    <div className="text-center leading-8 lg:mt-16 mb-4 mt-5">
      <h2 className="mx-auto lg:text-[40px] text-[20px]  font-extrabold lg:mb-3">
        {title}
      </h2>
      <p className="lg:text-md line-clamp-2 lg:w-[750px] mx-auto">{subTitle}</p>
    </div>
  );
};

export default Heading;
