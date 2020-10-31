import React from "react";
import "../styles.css"

export default function VideoThumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.image} alt="thumbnail" />
    </div>
  );
}
