import React from "react";
// import avatar from "./avatar.svg";
import '../css/Nav.css';
import { useNavigate } from "react-router";

function Nav() {
    // const navigate = useNavigate();
    return (
        <header className="nav">
            <div className="logoo">
                <h1 className="logoo-name">Optimized Route Service</h1>
            </div>
            <div className="service-name">
                <a >Home</a>
                <a >Services</a>
                <a >
                    {/* <img
                        className="nav__avatar"
                        src={avatar}
                        alt = "Avatar logo"
                    /> */}
                </a>
            </div>
        </header >
    )
}

export default Nav;