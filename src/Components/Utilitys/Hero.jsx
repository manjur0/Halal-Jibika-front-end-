import { Link } from "react-router-dom";

const Hero = ({ title,minititle, description, image }) => {
  return (
    <div>
      <div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="relative w-full bg-hero-pattern object-cover my-12 "
        >
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8  my-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight  text-[#111D3B] md:text-4xl lg:text-7xl">
                {title}
                <span className="mt-8 text-3xl font-bold tracking-tight  text-[#19A463] md:text-4xl lg:text-7xl">
                  {minititle}
                </span>
              </h1>
              {description}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="relative lg:col-span-5 lg:-mr-8   xl:col-span-6"
            >
              <img
                className="relative  aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-full xl:aspect-[16/0]"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
