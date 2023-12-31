import Hero from "../Components/Utilitys/Hero";
import applyedJobImg from "../../src/assets/applyedJob.svg";
import { useLoaderData } from "react-router-dom";
const ApplyedJobs = () => {
  const appliyedJobs = useLoaderData();
  console.log(appliyedJobs);
  return (
    <div>
      <div>
        <Hero
          title="Your Listed Favorite Jobs"
          minititle="  Applyed "
          image={applyedJobImg}
        />
      </div>
      <div></div>
    </div>
  );
};

export default ApplyedJobs;
