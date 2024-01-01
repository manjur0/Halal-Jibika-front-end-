import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../Utilitys/Button";

const Details = ({ job }) => {
  const { id, way, logo, title, location, salary, position, description } = job;
  const { overview, details, requirements } = description;
  const { responsibilities } = details;
  const { content } = requirements;
  return (
    <div className="">
      <div className=" grid grid-cols-3 gap-4 md:grid-cols-3 my-5">
        {/* left */}
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
            <span>
              <Link to={`/jobs`}>
                <Button seeAll="See All Jobs" route="/jobs" />
              </Link>
            </span>
          </div>
        </div>
        {/* right */}
        <div className="col-span-2">
          {/* demo */}
          <div className="hero px-8 py-5 rounded-lg bg-base-200 shadow-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={logo} className="max-w-sm rounded-lg " />
              <div>
                <h1 className="text-4xl font-bold mt-3">{title}</h1>

                <p className="text-[#19A463] text-xl my-2">{way}</p>
                <p className="text-xl">{position}</p>
                <Button seeAll="See All Jobs" route="/jobs" />
              </div>
            </div>
          </div>
          {/* description */}
          <div>
            <h1 className="text-2xl font-semibold my-3"> Job Description</h1>
            <p>{overview}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-3">
              {" "}
              Job Responsibilities
            </h1>
            <p>{responsibilities}</p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-3"> Job Requirements</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
