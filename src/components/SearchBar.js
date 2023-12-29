import React, { useRef } from "react";

const SearchBar = () => {
  const searchText = useRef(null);

  const handleSearchClick = () => {};

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-3 m-3 col-span-9 "
          placeholder="what would you like to watch today? "
        />
        <button
          className="col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
