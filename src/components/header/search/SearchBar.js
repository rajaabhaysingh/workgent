import React from "react";

import SuggestionAutocomplete from "./SuggestionAutocomplete";
import LocationAutoComplete from "./LocationAutoComplete";

const SearchBar = () => {
  // performQuery
  const performQuery = (e) => {
    e.preventDefault();
    console.log("Query performed without any search criteria.");
  };

  return (
    <div className="search_bar h-100 w-100 fjustc fend">
      <form onSubmit={performQuery} className="fc">
        <SuggestionAutocomplete />
        <LocationAutoComplete />
        <button type={"submit"}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
