import React from "react";
import Icon from "./icon";
import "../styles.css";

export function Sidebar(props) {
  const icons = props.icons;
  const listItems = icons.map((item, index) =>
    <Icon
        key={index.toString()}
        iconUrl={item.icon}
        title={item.title}
      />
  );
  return (
    <div className="sidebar">
      {listItems}
    </div>

    
  );
}
