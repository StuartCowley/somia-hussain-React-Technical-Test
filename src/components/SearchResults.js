import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <div> <p className="a">No results found!</p></div>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
          
        ))}
      </>
    );
  }
}
export default SearchResults;