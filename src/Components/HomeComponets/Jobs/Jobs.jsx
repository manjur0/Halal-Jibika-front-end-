import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";
import axios from "axios";
import toast from "react-hot-toast";

const Jobs = ({ slices }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get(
          "https://server-3rve.onrender.com/jobs/"
        );
        setJobs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchServerData();
  }, []);


  // delete job 
  const handleDelete = (id) => {
    const newJobs = jobs.filter((job) => job.id !== id)
    setJobs(newJobs)

     axios
       .delete(`https://server-3rve.onrender.com/jobs/${id}`)
       .then((response) => toast.remove("Job deleted:", response))
       .catch((error) => toast.error("Error deleting job:", error));
  };

  return (
    <div className="mx-auto max-w-7xl my-20   ">
      <div className=" grid grid-cols-1 mx-auto  gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, slices).map((job) => (
          <Job key={job.id} job={job} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
