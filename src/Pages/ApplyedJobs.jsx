import Hero from "../Components/Utilitys/Hero";
import applyedJobImg from "../../src/assets/applyedJob.svg";
import { useLoaderData } from "react-router-dom";
import MainTitle from "../Components/Utilitys/MainTitle";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../Components/Utilitys/LocalStorage";
import AddJobs from "./AddJobs/ApplyedJobs";
import axios from "axios";
const ApplyedJobs = () => {
  // get local storage
  const [applyedJobs, setApplyedJobs] = useState([]);
  const jobsList = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobsList?.length > 0) {
      const jobsApplyed = jobsList?.filter((job) =>
        storedJobsId?.includes(job?.id)
      );
      setApplyedJobs(jobsApplyed);
    }
  }, []);

  

  const handlDelteApplyedJobs = (id) => {
    const newApplyedJobs = applyedJobs.filter((job) => job.id !== id);
    setApplyedJobs( newApplyedJobs);

    // axios delete
    axios
      ?.delete(`http://localhost:9000/jobs/${id}`)
      .then((response) => {
        console.log("Job deleted:", response);
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };

  return (
    <div>
      <div>
        <Hero
          title="Your Listed Favorite Jobs"
          minititle="  Applyed "
          image={applyedJobImg}
        />
      </div>
      <div>
        <MainTitle mainTitle={"Your Applyed Jobs Lists"} />
      </div>

      {/* Applyed Jobs container */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 my-12">
        {applyedJobs?.map((job) => (
          <AddJobs
            handlDelteApplyedJobs={handlDelteApplyedJobs}
            key={job.id}
            applyedJob={job}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplyedJobs;
