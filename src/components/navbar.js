import React from "react";
import Logo from "./logo";

import SearchBar from "./search-bar";
import imgBar from "../images/toRse.png"
import SmIcon from "./smicon";
import iconVideo from "../icons/iconfinder_ic_videocam_48px_3669181.png"
import iconModule from "../icons/iconfinder_ic_view_module_48px_3669149.png"
import iconBell from "../icons/iconfinder_icon-ios7-bell_211694.png"
import Login from "./login";
import imgLogin from "../images/login_button.png"

/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return <div className="navbar">
    <Logo 
      logo={props.logo}
    />
    <SearchBar 
      image={imgBar}
    />
    <SmIcon 
      iconUrl={iconVideo}
    />
    <SmIcon 
      iconUrl={iconModule}
    />
    <SmIcon 
      iconUrl={iconBell}
    />
    <Login 
      image={imgLogin}
    />
  </div>;
}
