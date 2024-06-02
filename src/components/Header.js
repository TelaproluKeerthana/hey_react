import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => 
    {
        const[btnname,setbtnname]=useState("login");
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>
                <div className="navigation_items">
                    <ul>
                        <li>Home</li>
                        <li>
                            <Link to={"/about"}>About Us</Link></li>
                        <li>
                            <Link to={"/contact"}>Contact Us</Link></li>
                        <li>cart</li>
                        <button className="login"
                            onClick = {() => {
                            btnname==="login"? setbtnname("logout") :setbtnname("login")
                            }}>
                                {btnname}
                        </button>
                    </ul>
                </div>
            </div>
        );
    }

    export default Header;