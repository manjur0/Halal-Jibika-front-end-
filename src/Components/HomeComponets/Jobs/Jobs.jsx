import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";
import {  NavLink } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";


const Jobs = ({  }) => {
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
      <div className="flex justify-center">
        <NavLink to={"/addjobs"}>
          <button className="bg-[#19A463] text-2xl font-bold  p-3 rounded-lg text-white ] flex items-center justify-center">
            Add New Jobs <IoMdAddCircle />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Jobs;
