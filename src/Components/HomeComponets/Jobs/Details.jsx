const Details = ({ details }) => {
  console.log(details);
  const { id, way, logo, title, location, salary, position } = details;
  return (
    <div>
      <h1>{way}</h1>
    </div>
  );
};

export default Details;
