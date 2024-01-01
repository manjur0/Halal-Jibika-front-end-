import { Link } from "react-router-dom";

const AddJobs = ({ applyedJob }) => {
  console.log(applyedJob);
  const { id, way, logo, title, location, salary, description } = applyedJob;
  const { overview, details, requirements } = description;
  return (
    <div>
      <div className="  relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  max-w-[48rem] max-h-[18rem] flex-row">
        <div className="relative p-6 w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={logo}
            className="object-cover w-auto flex items-center justify-center  "
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            {way}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <h5>{location}</h5>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {overview}
          </p>
          <Link to={`/jobs`}>
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-300 active:bg-[#19A463] hover:text-[#19A463] active:text-[#19A463] bg-[#19A463] text-white"
              type="button"
            >
              All Jobs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
