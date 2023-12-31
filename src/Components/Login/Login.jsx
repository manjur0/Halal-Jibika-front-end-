import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    loginEmailPassword(email, password)
      .then((result) => {
        location.state?.from ? navigate(location.state.from) : navigate("/");
        toast.success("You Successfully Logedin");

        console.log(result);
      })
      .catch((error) => {
        toast.error("Please try again");
        console.log(error.message);
      });
  };
  return (
    <div>
      <section className="bg-[#F9FAFB]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24  ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              <div>
                <span className="font-bold cursor-pointer text-3xl ">
                  <span className="text-4xl text-[#19A463]">Jibi</span>ka{" "}
                  <span className="text-4xl text-[#19A463]">.</span>
                </span>
              </div>
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Don&#x27;t have an account?{" "}
              <Link
                to={"/register"}
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form onSubmit={handleLogin} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      name="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      name="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#19A463] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Login Now{" "}
              </button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
