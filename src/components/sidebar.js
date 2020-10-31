import React from "react";
import Icon from "./icon";
import "../styles.css";
import fireIcon from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "../icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

export function Sidebar() {
  return (
    <div className="sidebar">
      <Icon iconUrl={menuItems[0].icon} title={menuItems[0].title} />
      <Icon iconUrl={menuItems[1].icon} title={menuItems[1].title} />
      <Icon iconUrl={menuItems[2].icon} title={menuItems[2].title} />
      <Icon iconUrl={menuItems[3].icon} title={menuItems[3].title} />
    </div>
  );
}
