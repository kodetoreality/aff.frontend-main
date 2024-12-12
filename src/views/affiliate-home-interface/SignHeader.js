import React, { Component } from 'react';
import { history } from "../../history"
import {SIGNUP_URL,LOGIN_URL} from "../../urls";
import {logo} from "../../configs/affiliateConfig"
class Header extends Component {
    render() {
        return (
            <header id="first_interface_header" className="navbar navbar-sticky navbar-expand-lg position-fix">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/home">
                        <p className="color-white" style = {{fontSize : "50px"}}> {logo} </p>
                    </a>
                    <div className="navbar-inner mt-1">
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer ft-size-17" onClick = {() => history.push("home")}> Home </p>
                                </li>
                                {/* <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer" onClick = {() => history.push("home")}> Functionality </p>
                                </li> */}
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer ft-size-17" onClick = {() => history.push("home")}> Faq </p>
                                </li>
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer ft-size-17" onClick = {() => history.push("home")}> AboutUs </p>
                                </li>
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer ft-size-17" onClick = {() => history.push("home")}> LatestNews </p>
                                </li>
                                {/* <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer" onClick = {() => history.push("home")}> Developers </p>
                                </li>
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer" onClick = {() => history.push("home")}> Subscribe </p>
                                </li> */}
                                <li className="nav-item">
                                    <p className="color-white nav-link cursor-pointer" onClick = {() => history.push("home")}> ContactUs </p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <button className="btn bg-white color-black ft-weight" onClick = {() => history.push(LOGIN_URL)}>Sign In</button>
                        <button className="btn bg-1b9bfb color-black ft-weight ml-1" onClick = {() => history.push(SIGNUP_URL)}>Sign Up</button>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;