import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => 
    {
        const[btnname,setbtnname]=useState("login");
        return (
            <div className="flex justify-between bg-red-300">
                <div className="logo-container">
                    <img className="w-56" src={LOGO_URL} />
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4">Home</li>
                        <li className="px-4">
                            <Link to={"/about"}>About Us</Link></li>
                        <li className="px-4">
                            <Link to={"/contact"}>Contact Us</Link></li>
                        <li className="px-4">cart</li>
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