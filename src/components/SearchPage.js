import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";
import SearchMovieSuggestion from "./SearchMovieSuggestion";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BG_URL} alt=" Background logo" />
      </div>
      <SearchBar />
      <SearchMovieSuggestion />
    </div>
  );
};

export default SearchPage;
