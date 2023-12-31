import Jobs from "../../Components/HomeComponets/Jobs/Jobs";
import Hero from "../../Components/Utilitys/Hero";
import MainTitle from "../../Components/Utilitys/MainTitle";

const AllJobs = () => {
  return (
    <div>
      <Hero
        title="Get applications from the world best talents."
        image={
          "https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2023/04/14124110/Top-10-Job-Portals-in-India-That-Makes-Them-Good-min.jpg"
        }
      />
      <MainTitle mainTitle="All Jobs List For You  " />
      <Jobs />
    </div>
  );
};

export default AllJobs;
