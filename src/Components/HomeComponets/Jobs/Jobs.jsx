import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const Jobs = ({}) => {
  const [jobs, setJobs] = useState([]);

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
      
    </div>
  );
};

export default Jobs;
