import React, { useState } from "react";

const SuggestionAutocomplete = () => {
  // local state management
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="fcc">
      <i className="fas fa-search"></i>
      <input type="text" />
    </div>
  );
};

export default SuggestionAutocomplete;
