import { NavLink } from "react-router-dom";

import { IoIosAddCircleOutline } from "react-icons/io";

const Button = ({ seeAll, route , icons }) => {
  return (
    <div>
      <NavLink to={route}>
        <button className="bg-[#19A463] text-base font-bold  p-3 rounded-lg text-white ] flex items-center justify-center">
          {seeAll}
          <span className="ml-2 text-xl">{icons}</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Button;