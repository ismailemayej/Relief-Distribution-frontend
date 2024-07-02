import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../../types/Types";
import { toast } from "sonner";
import { useLoginMutation } from "../../Redux/Api/AuthLogin/AuthLogin";
import { setUser } from "../../Redux/AuthSlice";
import { useAppDispatch } from "../../Redux/Hooks";
import { useForm } from "react-hook-form";
import Spinner from "../../component/Spinner";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
const Login = () => {
  const [login, { isLoading, data: loggedinData }] = useLoginMutation();
  console.log(loggedinData, "this is login data");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = async (data: FormInputs) => {
    const userinfo = {
      name: data?.name || "Guest",
      email: data.email,
      password: data.password,
    };
    try {
      await login(userinfo).unwrap();

      toast.success("SinIn Successfully");
      // Assuming you're using react-toastify, you need to import it correctly
      toast.success("Successfully Login");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error here, for example:
      toast.error("Failed to login. Please try again.");
    }
  };
  useEffect(() => {
    if (loggedinData) {
      const token = loggedinData.token;
      const decoded = jwtDecode(token);
      dispatch(setUser(decoded));
      navigate("/dashboard");
    }
  }, [loggedinData]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen flex border items-center justify-center bg-gray-50 px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            LogIn
          </h2>
        </div>
        <div className="flex gap-3 border border-gray-400 rounded-xl px-2">
          <span>
            <b>email</b>:ismailee@ismaile.com
          </span>
          <span>
            <b>Password</b>:12345
          </span>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-xl shadow-sm-space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                defaultValue="ismailee@ismaile.com"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none input input-bordered rounded-xl  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
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
                defaultValue="12345"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none input input-bordered rounded-xl  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm mt-3"
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <p>
          dont have any account ? please{" "}
          <Link className="font-semibold text-blue-800" to="/register">
            Register
          </Link>
          now
        </p>
      </div>
    </div>
  );
};

export default Login;
