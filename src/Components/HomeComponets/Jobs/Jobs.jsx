import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";
import { Link } from "react-router-dom";

const Jobs = ({ handlPopup }) => {
  const [jobs, setJobs] = useState([]);
  const [showAllJob, setShowAllJob] = useState(8);
  const handleShowJob = () => {
    setShowAllJob(!showAllJob);
  };
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("../../../../public/Jobs.json");
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);
  return (
    <div className="mx-auto max-w-7xl my-20   ">
      <div className=" grid grid-cols-1 mx-auto  gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, 6).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center">
        <Link to={"/jobs"}>
          <button
            className="bg-[#19A463] p-2 rounded-lg text-white ]"
            onClick={() => handleShowJob(showAllJob)}
          >
            Show ALl
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
