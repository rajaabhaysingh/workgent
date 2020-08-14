import React from "react";

import SuggestionAutocomplete from "./SuggestionAutocomplete";
import LocationAutoComplete from "./LocationAutoComplete";

const SearchBar = () => {
  return (
    <div className="h-100 w-100 fc">
      <SuggestionAutocomplete />
      <LocationAutoComplete />
    </div>
  );
};

export default SearchBar;
