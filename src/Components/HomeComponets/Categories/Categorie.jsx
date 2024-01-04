const Categorie = ({ category }) => {
  const { id, title, image, job_count } = category;

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className=" cursor-pointer  card w-full bg-base-100  text-primary-content rounded-xl py-20 px-8 shadow-xl   hover:shadow-2xl hover:bg-[#19A463] hover:text-white bg-[#fff] transition"
      >
        <div className="card-body min-h-[150px]">
          <img
            className="rounded-3xl bg-[#19a46346] py-3 px-3 hover:rounded-3xl hover:bg-[#e7eeeb46] hover:py-3 hover:px-3  "
            src={image}
            alt=""
          />
          <h2 className="card-title text-2xl font-semibold py-2">{title}</h2>
          <p>{job_count} Jobs</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
