import { Link } from "react-router-dom";

const FavoriteCard = ({ favJob, handleApplyJob }) => {
  console.log(favJob);
  const {
    id,
    title,
    logo,
    location,
    position,
    salary,
    way,
    description,
    requirements,
  } = favJob;
  return (
    <div>
      <div className="mx-auto my-10  max-w-xs  items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row justify-start md:items-start md:text-left">
        <div className="mb-4 md:mr-6 md:mb-0">
          <img
            className="h-full  rounded-lg object-cover md:w-[150px] "
            src={logo}
            alt=""
          />
        </div>
        <div className="">
          <p className="text-xl font-medium text-gray-700">{title}</p>
          <p className="mb-4 text-sm font-medium text-gray-500">{location}</p>
          <div className="flex space-x-2">
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Salary</p>
              <p className="text-3xl font-base text-gray-600">{salary}</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Position</p>
              <p className="text-3xl font-base text-gray-600">{position}</p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-base text-gray-500">Followers</p>
              <p className="text-3xl font-base text-gray-600">2.5k</p>
            </div>
            <div className=""></div>
          </div>
          <div className="mb-3"></div>
          <div className="flex justify-between my-5">
            <Link to={`/jobdetails/${id}`}>
              <button className="w-full rounded-lg border-2 bg-[#F9FAFB] px-4 py-2 font-medium text-gray-500">
                Details
              </button>
            </Link>
            <button
              onClick={() => handleApplyJob(id)}
              className="btn btn-primary bg-[#19a4634e]  px-5 py-2 rounded-lg text-[#19A463] hover:bg-[#19A463] hover:text-white hover:transition-all "
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
