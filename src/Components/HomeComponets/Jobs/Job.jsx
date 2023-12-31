import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Swal from "sweetalert2";

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
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-10 mx-auto py-8 px-10 rounded-lg">
        <div className="card-body ">
          <img src={logo} className="w-40" alt="" />
          <h4 className="text-[#19A463] text-xl my-3 ">{way}</h4>
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex justify-between ">
            <p className="text-lg font-semibold flex items-center">
              <IoLocationOutline />
              {location}
            </p>
            <p className="font-semibold flex items-center">
              <MdAccessTime />
              {position}
            </p>
          </div>
        </div>

        <div className="flex justify-between my-8 text-sm font-semibold">
          <p className="">{salary}</p>
          <button
            onClick={() => handleShowJob(id)}
            className="btn btn-primary bg-[#19A463] p-2 rounded-lg text-white  "
          >
            Apply
          </button>
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
