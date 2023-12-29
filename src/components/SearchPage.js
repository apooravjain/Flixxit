import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BG_URL} alt=" Background logo" />
      </div>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
