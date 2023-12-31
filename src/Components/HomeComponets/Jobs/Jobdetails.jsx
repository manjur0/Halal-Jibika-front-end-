import { useLoaderData } from "react-router-dom";
import Hero from "../../Utilitys/Hero";
import resume from "../../../assets/resume.svg";
import MainTitle from "../../Utilitys/MainTitle";
import Details from "./Details";

const Jobdetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className=" ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {jobDetails.map((details) => {
          <Details key={details.id} details={details} />;
        })}
      </div>
      <div>
        <Hero
          title="Job Details Apply Your"
          minititle={" Dream Jobs"}
          image={resume}
        />
      </div>
      <div>
        <MainTitle mainTitle="Please Read The Details" />
      </div>
    </div>
  );
};

export default Jobdetails;
