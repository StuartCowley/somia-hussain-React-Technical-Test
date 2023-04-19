import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../request/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="btn-container">
          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
