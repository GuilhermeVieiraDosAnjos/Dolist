import { useState } from "react";
import { MdOutlineSearch, MdOutlineClose } from "react-icons/md";
function Search({ search, setSearch }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="search">
      <div>
        <button onClick={toggleSearch} className="md:hidden">
          {searchOpen ? <MdOutlineClose/> : <MdOutlineSearch/>}
        </button>
      </div>
      <div className={`p-2 md:flex items-center gap-1 ${searchOpen ? '' : 'hidden'}`}>
        <h2 className="font-montserrat">Pesquisar: </h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite para pesquisar..."
          className="bg-gray-200 rounded-md p-1 w-full"
        />
      </div>
    </div>
  );
}

// Search.propTypes = {
//   search: PropTypes.string.isRequired,
//   setSearch: PropTypes.func.isRequired,
// };

export default Search;
