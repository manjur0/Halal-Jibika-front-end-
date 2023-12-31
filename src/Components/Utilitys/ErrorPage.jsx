import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex items-center justify-center    ">
      <div>
        <img
          className="text-center"
          src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/media/fcae22bbd51c347a7af3a2d9072754ae.gif"
          alt=""
        />
        <div className="text-center">
          <Link
            to={"/"}
            className="text-white bg-[#19A463] py-2 px-4 mb-12 rounded-xl text-center"
          >
            Back To Home
          </Link>
        </div>
      </div>
      >
    </div>
  );
};

export default ErrorPage;
