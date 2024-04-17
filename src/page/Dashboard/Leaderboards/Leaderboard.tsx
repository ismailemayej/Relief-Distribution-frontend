const Leaderboard = () => {
  return (
    <div>
      <div className=" relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
        <h2 className="text-center font-bold text-2xl my-3 bg-slate-100 py-2">
          TOP DONARS{" "}
        </h2>
        <nav className="flex min-w-[100%] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <img
                alt="emma"
                src="https://docs.material-tailwind.com/img/face-3.jpg"
                className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
              />
            </div>
            <div>
              <h6 className="block font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Emma Willever
              </h6>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                UI/UX Designer @ Material Tailwind
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Leaderboard;
