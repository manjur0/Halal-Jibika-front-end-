import Categories from "../../Components/HomeComponets/Categories/Categories";
import Company from "../../Components/HomeComponets/Company/Company";
import FeaturedJob from "../../Components/HomeComponets/FeaturedJob/FeaturedJob";
import HeroSection from "../../Components/HomeComponets/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Company />
      <Categories />
      <div className="bg-[#F4FBF7] ">
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;
