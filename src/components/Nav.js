import React from "react";
import avatar from "./svg/avatar.svg";
import "./css/Nav.css"
import { useNavigate } from "react-router";

function Nav(){
    const navigate = useNavigate();
    return(
        <header className="nav">
            <div className="logo">
                <h1 className="logo-name">Optimized Route Service</h1>
            </div>
            <div className="service-name">
                <a onClick={() => navigate("/")}>Home</a>
                <a onClick={() => navigate("/user-services")}>Services</a>
                <a onClick={() => navigate("/signup")}>
                    <img
                        className="nav__avatar"
                        src={avatar}
                        alt = "Avatar logo"
                    />
                </a>
            </div>
        </header>
    )
}

export default Nav;