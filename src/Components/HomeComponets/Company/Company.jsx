import Carosul from "./Carosul";

const Company = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-center text-[#111D3B] text-5xl font-bold my-4 "
      >
        <h1 className="">
          More Than <span className="text-[#19A463]">100+</span> Company Trusted
          Us
        </h1>
      </div>
      <Carosul />
    </div>
  );
};

export default Company;
