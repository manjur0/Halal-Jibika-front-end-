import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { emailAndPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  // handle sign up
  const handleSighUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(
      "name:",
      name,
      "Email:",
      email,
      "Pass:",
      password,
      "conPass:",
      confirmPassword
    );
    e.target.reset();

    //clear input field

    // validation
    // if (
    //   name === "" ||
    //   email === "" ||
    //   password === "" ||
    //   confirm_password === ""
    // ) {
    //   toast.error("All fields are required");
    //   return;
    // }

    // //email validation
    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //   return toast.error("email is invalid");
    // }

    // // password validation
    // if (password.length > 6) {
    //   return toast.error("Password must be at least 6 characters");
    // }
    emailAndPassword(email, password)
      .then((result) => {
        navigate("/");
        console.log(result);
        toast.success("Account created successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <section className="bg-[#F9FAFB]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              <div>
                <span className="font-bold cursor-pointer text-3xl ">
                  <span className="text-4xl text-[#19A463]">Jibi</span>ka{" "}
                  <span className="text-4xl text-[#19A463]">.</span>
                </span>
              </div>
              Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to={"/login"}
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <form onSubmit={handleSighUp} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      id="name"
                    />
                  </div>
                </div>
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
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Confirm Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="confirmPassword"
                      type="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Password"
                      id="confirmPassword"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#19A463] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black"
              >
                Create Account
              </button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
