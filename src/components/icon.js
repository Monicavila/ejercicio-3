import React from "react";
import "../styles.css";

export default function Icon(props) {
  return (
    <div className="icon">
      <img src={props.iconUrl} alt="icon" />
      <p>{props.title}</p>
    </div>
  );
}
