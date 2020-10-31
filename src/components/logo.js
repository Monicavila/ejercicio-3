import React from "react";
import "../styles.css"

export default function Logo(props) {
  return (
    <div className="logo">
      <img src={props.logo} alt="logo" />
    </div>
  );
}
