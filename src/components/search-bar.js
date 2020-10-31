import React from "react";
import "../styles.css"

export default function SearchBar(props) {
  return <div className="search-bar">
            <img src={props.image} alt="SearchBar" />
          </div>;
}
