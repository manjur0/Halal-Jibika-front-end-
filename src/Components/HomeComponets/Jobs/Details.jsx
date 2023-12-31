import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../Utilitys/Button";

const Details = ({ job }) => {
  const { id, way, logo, title, location, salary, position } = job;
  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-2 my-5">
        <div className="col-span-1 bg-[#F3FAF7] p-6 rounded-lg">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-bold my-3">Multipurpose Company</h2>
            <p>
              Dramatically envisioneer <br /> interactive leader ship through
              functionalized .
            </p>
          </div>
          <div>
            <h2 className="text-2xl my-3">Number Of Employee</h2>
            <p className="text-2xl font-bold">50-100</p>
          </div>
          <div>
            <h2 className="text-2xl my-3">Company Location</h2>
            <span className="flex items-center">
              <CiLocationOn className="text-[#19A463] text-xl" />
              <p className="text-xl font-bold my-3">{location}</p>
            </span>
            <span >
              <Link to={`/jobs`}>
                <Button seeAll="See All Jobs" route="/jobs" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
