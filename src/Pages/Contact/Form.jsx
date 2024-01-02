
import Button from '../../Components/Utilitys/Button';

const Form = () => {
    return (
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-red rounded-lg  py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
                <p className="text-red text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="password"
                />
                <p className="text-grey-dark text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  State
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
    );
};

export default Form;