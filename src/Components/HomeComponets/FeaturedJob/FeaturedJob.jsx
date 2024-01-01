import Button from "../../Utilitys/Button";
import Jobs from "../Jobs/Jobs";

const FeaturedJob = () => {
  return (
    <div className="mx-auto max-w-7xl  lg:my-40 my-8  pt-10 pb-10">
      <div>
        <h3 className="text-[#161918]">FEATURED JOBS</h3>
        <h1 className="text-5xl font-bold text-[#161918]">
          Perfect Job For You
        </h1>
      </div>
      <Jobs slices={6} />
      <div className="flex justify-center items-center text-center">
        <Button seeAll="See All Jobs" route="/jobs" />
      </div>
    </div>
  );
};

export default FeaturedJob;
