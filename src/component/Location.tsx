import Heading from "./Heading";
import area from "../assets/marketing-mix-place.jpg";

const CenterLocation = () => {
  return (
    <>
      <Heading title="Distribution Center Locations" subTitle="" />
      <div className=" grid lg:grid-cols-2 grid-cols-1 px-4 lg:pl-48 mx-auto bg-slate-100 shadow-md rounded-xl lg:py-16 py-6">
        <div>
          <h3 className="t text-neutral-800 text-2xl">
            Center Name:
            <span className="text-green-500 ml-2">
              Relief Center Alpha
            </span>{" "}
          </h3>
          <h3 className="t text-neutral-800 text-2xl">
            address:
            <span className="text-green-500 ml-2">
              123 Main Street, Cityville, State, ZIP
            </span>
          </h3>
          <h3 className="t text-neutral-800 text-2xl">
            latitude:
            <span className="text-green-500 ml-2">40.7128,</span>
          </h3>
          <h3 className="t text-neutral-800 text-2xl">
            longitude:
            <span className="text-green-500 ml-2">-74.0060,</span>
          </h3>
          <h3 className="t text-neutral-800 text-2xl">
            phone:
            <span className="text-green-500 ml-2">01858226967</span>
          </h3>
          <h3 className="t text-neutral-800 text-2xl">
            pemail:
            <span className="text-green-500 ml-2">assainment@gmail.com</span>
          </h3>
        </div>

        <img className="lg:mt-0 mt-12" src={area} alt="" />
      </div>
    </>
  );
};

export default CenterLocation;
