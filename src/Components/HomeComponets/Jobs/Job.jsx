import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Swal from "sweetalert2";
import { GrFavorite } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";

const Job = ({ job }) => {
  const { id, way, logo, title, location, salary, position } = job;

  const handleShowJob = (id) => {
    console.log(id);
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

  // faviorite job handler
  const handleFavoriteJob = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-10 mx-auto py-8 px-10 rounded-lg">
        <div className="card-body ">
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

        <div className="flex justify-between my-8 text-sm font-semibold">
          <button
            onClick={() => handleShowJob(id)}
            className="btn btn-primary bg-[#19a4634e]  px-5 py-2 rounded-lg text-[#19A463] hover:bg-[#19A463] hover:text-white hover:transition-all "
          >
            Apply
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
