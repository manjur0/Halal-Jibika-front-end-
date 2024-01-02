import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  // google login
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        navigate("/");
        const user = result.user;
        toast.success(user, "Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="mt-3 space-y-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-[#19A463] hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        >
          <FcGoogle className="mr-2 h-6 w-6" />
          Sign up with Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        >
          <FaGithub className="mr-2 h-6 w-6" />
          Sign up with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
