import Hero from "../Components/Utilitys/Hero";
import applyedJobImg from "../../src/assets/applyedJob.svg";
import { useLoaderData } from "react-router-dom";
import MainTitle from "../Components/Utilitys/MainTitle";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../Components/Utilitys/LocalStorage";
import AddJobs from "./AddJobs/AddJobs";
const ApplyedJobs = () => {
  const [applyedJobs, setApplyedJobs] = useState([]);
  const jobsList = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobsList?.length > 0) {
      const jobsApplyed = jobsList?.filter((job) =>
        storedJobsId?.includes(job.id)
      );
      setApplyedJobs(jobsApplyed);
      // console.log(jobsList, storedJobsId, jobsApplyed);
    }
  }, []);
  console.log(applyedJobs);

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
      <div  className="mx-auto max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 my-12"> 
        {applyedJobs?.map((job) => (
          // <ul key={job.id}>
          //   <li>{job.title}</li>
          // </ul>
          <AddJobs key={job.id} applyedJob={job} />
        ))}
      </div>
    </div>
  );
};

export default ApplyedJobs;
