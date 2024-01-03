import Button from "../../Components/Utilitys/Button";
import Hero from "../../Components/Utilitys/Hero";
import MainTitle from "../../Components/Utilitys/MainTitle";
import Contact from "../Contact/Contact";
import Form from "../Contact/Form";

const AddJobs = () => {
  return (
    <div>
      <div>
        <Hero title="List Your Job " minititle="  Offer "></Hero>
      </div>
      <div>
        <MainTitle mainTitle={"Add New Jobs"} />
      </div>
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  title
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-red rounded-lg  py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="Ititle"
                />
              </div>
             
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  location
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="location"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  salary
                </label>
                <input
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="salary"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  position
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="position"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Remote or Onsite
                </label>
                <input
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="Remote or Onsite"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Logo Link
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="logo link"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Description
                </label>
                <textarea
                  wrap="soft"
                  rows="4"
                  cols="4"
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Area
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-yellow-50 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded-lg"
                    id="grid-state"
                  >
                    <option>bangladesh</option>
                    <option>usa</option>
                    <option>uk</option>
                    <option>australia</option>
                  </select>
                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Zip
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </div>
            </div>
            <div  className="flex items-center justify-center my-8 ">
              <Button seeAll="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
