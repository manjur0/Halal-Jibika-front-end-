import Button from "../../Components/Utilitys/Button";
import Hero from "../../Components/Utilitys/Hero";
import MainTitle from "../../Components/Utilitys/MainTitle";
import appyedJobs from "../../../src/assets/applyjobs.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddJobs = () => {
  const initislObject = {
    title: "",
    description: "",
    location: "",
    type: "",
    salary: "",
    way: "",
    company: "",
    position: "",
    date: "",
    logo: "",
  };
  const [newPostData, setNewPostData] = useState(initislObject);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPostData({ ...newPostData, [name]: value });

    // clear input
    e.target.value = "";

    // form validation
    if (name === "title" && value.length < 6) {
      toast.error("Title should be at least 5 characters long");
    }

    if (name === "description" && value.length < 10) {
      toast.error("Description should be at least 10 characters long");
    }

    if (name === "location" && value === "") {
      toast.error("Location is required");
    }

    if (name === "type" && value === "") {
      toast.error("Type is required");
    }
  };

  const navigate = useNavigate();
  const handleNewSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/jobs", newPostData)
      .then(function (response) {
        navigate("/jobs");
        setNewPostData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // form validation

  return (
    <div>
      <div>
        <Hero
          title="List Your Job "
          minititle="  Offer "
          image={appyedJobs}
        ></Hero>
      </div>
      <div>
        <MainTitle mainTitle={"Add New Jobs"} />
      </div>
      <div>
        <div className="mx-auto max-w-7xl">
          <form onSubmit={handleNewSubmit}>
            <div className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    title
                  </label>
                  <input
                    required
                    onChange={handleChange}
                    name="title"
                    value={newPostData.title}
                    className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-red rounded-lg  py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="title"
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex  mb-6">
                <div className="md:w-full px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    location
                  </label>
                  <input
                    required
                    onChange={handleChange}
                    name="location"
                    value={newPostData.location}
                    className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                    id="grid-password"
                    type="text"
                    placeholder="location"
                  />
                </div>
                <div className="md:w-full px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    salary
                  </label>
                  <input
                    required
                    onChange={handleChange}
                    name="salary"
                    value={newPostData.salary}
                    className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                    id="grid-password"
                    type="text"
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
                    required
                    onChange={handleChange}
                    name="position"
                    value={newPostData.position}
                    className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                    id="grid-password"
                    type="text"
                    placeholder="position"
                  />
                </div>
                <div className="md:w-full px-3">
                  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Remote or Onsite
                  </label>
                  <input
                    required
                    onChange={handleChange}
                    name="way"
                    value={newPostData.way}
                    className="appearance-none block w-full  bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                    id="grid-password"
                    type="text"
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
                    onChange={handleChange}
                    name="logo"
                    value={newPostData.logo}
                    className="appearance-none block w-full bg-yellow-50 text-grey-darker border border-grey-lighter rounded-lg py-3 px-4 mb-3"
                    id="grid-password"
                    type="text"
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
              <div className="flex items-center justify-center my-8 ">
                <button
                  aria-required
                  type="submit"
                  className="bg-[#19A463] text-white px-4 py-2 rounded"
                >
                  Add New Jobs
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
