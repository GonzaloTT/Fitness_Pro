import "./SearchBar.css";

import searchIcon from "../../../../assets/icons/search.png";

export default function SearchBar({
  search,
  setSearch
}) {
  return (
    <div className="library-search">
      <img
        src={searchIcon}
        alt="Search"
        className="library-search__icon"
      />

      <input
        type="text"
        placeholder="Buscar ejercicio o grupo muscular..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}