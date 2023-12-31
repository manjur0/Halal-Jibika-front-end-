import Swal from "sweetalert2";
import Job from "./HomeComponets/Jobs/Job";


const AppliedPopup = () => {
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
            <Job handleShowJob={handleShowJob} />
        </div>
    );
};

export default AppliedPopup;