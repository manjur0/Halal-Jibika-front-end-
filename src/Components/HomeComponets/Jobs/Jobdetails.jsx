import { useLoaderData, useParams } from "react-router-dom";
import Hero from "../../Utilitys/Hero";
import resume from "../../../assets/resume.svg";
import MainTitle from "../../Utilitys/MainTitle";
import Details from "./Details";

const Jobdetails = () => {
  const jobDetails = useLoaderData();
  const { id } = useParams();
  const idInd = parseInt(id);
  console.log(id);
  const job = jobDetails.find((job) => job.id === idInd);
  const { title, location, salary, position, way, logo } = job;

  return (
    <div className="mx-auto max-w-7xl ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2"></div>
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
      <Details job={job} />
    </div>
  );
};

export default Jobdetails;
