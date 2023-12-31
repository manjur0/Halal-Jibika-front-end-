import { IoIosAddCircleOutline } from "react-icons/io";
import Jobs from "../../Components/HomeComponets/Jobs/Jobs";
import Button from "../../Components/Utilitys/Button";
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
      <div className="flex justify-center items-center mb-12">
        <Button
          seeAll="Add New Jobs"
          route="/addjobs"
          icons={<IoIosAddCircleOutline />}
        ></Button>
      </div>
    </div>
  );
};

export default AllJobs;
