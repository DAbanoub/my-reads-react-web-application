import React from "react";

function SearchError({ query }) {
  return query === "" ? (
    <div style={{ color: "#ee0000", fontSize: "1.5rem" }}>please type in search</div>
  ) : (
    <div style={{ color: "#ee0000", fontSize: "1.5rem" }}>
      no books to currently show please try different word
    </div>
  );
}

export default SearchError;
