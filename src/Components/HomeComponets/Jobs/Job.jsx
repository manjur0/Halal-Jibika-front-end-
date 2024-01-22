import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Swal from "sweetalert2";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { setJobApplication } from "../../Utilitys/LocalStorage";

const Job = ({ job, handleDelete }) => {
  const { id, way, logo, title, location, salary, position } = job;

  const handleApplyedJobAndAlert = (id) => {
    // setLocal storage
    setJobApplication(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this job!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#19A463",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeas!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Your job has been added.",
          icon: "success",
        });
      }
    });
  };

  // delete job
  const handleFavoriteJob = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="card  bg-base-100 shadow-xl my-10 mx-auto py-8 px-10 rounded-lg"
      >
        <div className="card-body  min-h-[250px] ">
          <div className="flex items-center justify-between">
            <img src={logo} className="w-40" alt="" />
            <GrFavorite
              onClick={() => handleFavoriteJob(id)}
              className="text-2xl text-[#19A463] cursor-pointer"
            />
          </div>
          <h4 className="text-[#19A463] text-xl my-3 ">{way}</h4>
          <p className="font-semibold flex items-center">
            <MdAccessTime />
            {position}
          </p>
          <h2 className="card-title text-2xl font-bold mt-3">{title}</h2>
          <div className="flex justify-between mt-3 ">
            <p className="text-lg font-semibold flex items-center ">
              <IoLocationOutline />
              {location}
            </p>
            <p className="text-xl font-semibold">{salary}</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-8 text-sm font-semibold">
          <button
            onClick={() => handleApplyedJobAndAlert(id)}
            className="btn btn-primary bg-[#19a4634e]  px-5 py-2 rounded-lg text-[#19A463] hover:bg-[#19A463] hover:text-white hover:transition-all "
          >
            Apply
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-primary   px-5 py-2 rounded-lg text-[#19A463] hover:bg-red-500 hover:text-white hover:transition-all "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 5.5L19.0982 12.0062M4.5 5.5L5.10461 15.5248C5.25945 18.0922 5.33688 19.3759 5.97868 20.299C6.296 20.7554 6.7048 21.1407 7.17905 21.4302C7.85035 21.84 8.68108 21.9631 10 22"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 15L13 21.9995M20 22L13 15.0005"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link to={`/jobdetails/${id}`}>
            <button className="btn btn-primary bg-[#19a4634e]  px-5 py-2 rounded-lg text-[#19A463] hover:bg-[#19A463] hover:text-white hover:transition-all ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;

Job.propTypes = {
  job: PropTypes.object,
  way: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  salary: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.number,
};
