import React from "react";
import './Navbar.css'
import {NavbarData} from "./NavbarData";

function Navbar(){
    return(
        <div className="Navbar-container">
        <ul className="NavbarList grid grid-cols-12 gap-4">
            {NavbarData.map ((val, key) => {
                return (
                    <li
                    key={key}
                    className="row col-span-4"
                    id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {window.location.pathname = val.link;}}>
                    <div>{val.icon}</div><div>{val.title}</div>
                </li>
                );
            })}
        
        </ul>
        </div>
    );
}

export default Navbar;