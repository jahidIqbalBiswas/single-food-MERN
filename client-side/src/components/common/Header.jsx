import React from 'react';
import logo from "../../assets/img/logo.svg"
import {Link, NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <nav>
            <div className="navbar bg-base-100 border border-[#7c7a7a26]">
                <Link to="/" className="btn btn-ghost text-xl"><img style={{width: "150px"}} src={logo} alt=""/></Link>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ms-auto"><i
                    className="bi bi-list text-xl text-white"></i></label>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    {props.siteContent}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <br/>
                        <li className="mb-2"><NavLink to="/create"><i className="bi bi-cart"></i> Create Food</NavLink></li>
                        <li><NavLink to="/"><i className="bi bi-list-ul"></i> All Foods</NavLink></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;