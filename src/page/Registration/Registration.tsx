import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../../types/Types";
import { useRegisterMutation } from "../../Redux/Api/AuthRegister/AuthRegister";
import { toast } from "sonner";
const Registration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [Register, { data }] = useRegisterMutation();
  console.log(data, "data");

  const onSubmit = (data: FormInputs) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      Register(userInfo);
      navigate("/");

      toast.success("Register successfully");
    } catch (error) {
      console.log(error);
      toast.error("samethis is wrong");
    }
  };

  return (
    <div className="min-h-screen flex border items-center justify-center bg-gray-50 px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-xl shadow-sm-space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className=" appearance-none input input-bordered rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none input input-bordered rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none input input-bordered rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
        <p>
          Alredy hove account ? please{" "}
          <Link className="font-semibold text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
