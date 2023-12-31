import Hero from "../Components/Utilitys/Hero";
import applyedJobImg from "../../src/assets/applyedJob.svg";
const ApplyedJobs = () => {
  return (
    <div>
      <Hero
        title="Your Listed Favorite Jobs"
        minititle="  Applyed "
        image={applyedJobImg}
      />
    </div>
  );
};

export default ApplyedJobs;
