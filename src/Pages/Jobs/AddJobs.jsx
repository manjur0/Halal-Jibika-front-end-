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
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  id
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-red rounded-lg  py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="ID"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Way
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Way"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  logo
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="logo"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  location
                </label>
                <input
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="location"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  logo
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="logo"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  location
                </label>
                <input
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="location"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex  mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  salary
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="salary"
                />
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  position
                </label>
                <input
                  className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="position"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  title
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4"
                  id="grid-city"
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  location
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-yellow-50 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded-lg"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
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
            <div className="flex items-center justify-center my-8 ">
              <Button seeAll="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
