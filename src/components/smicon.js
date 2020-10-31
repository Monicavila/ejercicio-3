import React from "react";
import "../styles.css";

export default function SmIcon(props) {
  return (
    <div className="smIcon">
      <img src={props.iconUrl} alt="icon" />
    </div>
  );
}