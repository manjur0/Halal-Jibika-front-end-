import { useLoaderData } from "react-router-dom";
import Hero from "../../Components/Utilitys/Hero";
import MainTitle from "../../Components/Utilitys/MainTitle";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../Components/Utilitys/LocalStorage";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const [favorite, serFavorite] = useState();
  const jobsList = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobsList?.length > 0) {
      const jobsApplyed = jobsList?.filter((job) =>
        storedJobsId?.includes(job?.id)
      );
      serFavorite(jobsApplyed);
    }
  }, []);

  console.log(favorite);

  const handleApplyJob = (id) => {
  }

  return (
    <div>
      <div>
        <Hero
          title="Your Listed Favorite Jobs"
          image="https://www.utb.ac.rw/wp-content/uploads/2021/07/JOB.png"
        />
        <MainTitle mainTitle="Favorite Jobs" />
      </div>
      <div className=" mx-auto max-w-7xl  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {favorite?.map((favJob) => (
          <FavoriteCard
            key={favJob.id}
            favJob={favJob}
            handleApplyJob={handleApplyJob}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
