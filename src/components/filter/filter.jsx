import { useState } from "react";
import { MdFilterListAlt, MdOutlineClose } from "react-icons/md";

const Filter = ({ filter, setFilter, setSort }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="filter ">
      <div>
        <button className="md:hidden" onClick={toggleFilter}>
          {filterOpen ? <MdOutlineClose /> : <MdFilterListAlt />}
        </button>
      </div>
      <div
        className={` p-2 md:flex gap-2 items-center ${
          filterOpen ? "flex flex-col items-center justify-center" : "hidden"
        }`}
      >
        <div className="flex gap-1 justify-around">
          <h2 className="font-montserrat">Filtrar:</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-200 rounded-md cursor-pointer hover:bg-slate-300 duration-300"
            >
              <option value="All">Todas</option>
              <option value="Completed">Completas</option>
              <option value="Incomplete">Incompletas</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
