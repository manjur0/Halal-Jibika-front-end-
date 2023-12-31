import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="relative w-full bg-hero-pattern object-cover my-12 "
        >
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-12 my-12">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="relative lg:col-span-5 lg:-mr-8   xl:col-span-6 "
            >
              <img
                className="relative aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full  xl:aspect-[16/0]"
                src="https://html.creativegigstf.com/khuj/khuj/images/banner/banner-13.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <h1 className="mt-8 text-3xl font-bold tracking-tight  text-[#111D3B] md:text-4xl lg:text-6xl">
                Find Your Dream Job with
                <span className="text-[#19A463]"> JIBIKA.</span>
              </h1>
              <p className="mt-8 text-lg text-gray-700 border-l-4 border-[#19A463] pl-2 ">
                Dynamically matrix holistic e-tailers rather than seamless
                mindshare. Efficiently incentivize realtime information with
                interoperable.
              </p>
              <p className="mt-8 text-lg text-gray-700">
                Efficiently enhance low-risk high yield relationships visa state
                of the art cat change.
              </p>
              <form action="" className="mt-8 flex items-start space-x-2">
                <div></div>
                <div>
                  <Link to={"/jobs"}>
                    <button
                      type="button"
                      className="rounded-md bg-[#19A463] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#19B461] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Explore Now
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
