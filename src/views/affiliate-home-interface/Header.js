import React, { Component } from 'react';
import { history } from "../../history"
import {LOGIN_URL,SIGNUP_URL} from "../../urls"
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
                                    <p className="color-white nav-link cursor-pointer ft-size-17" onClick = {() => history.push("home")}>Home</p>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="color-white nav-link" href="#Functionality">Functionality</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="color-white nav-link ft-size-17" href="#Faq">Faq</a>
                                </li>
                                <li className="nav-item">
                                    <a className="color-white nav-link ft-size-17" href="#aboutus">AboutUs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="color-white nav-link ft-size-17" href="#LatestNews">LatestNews</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="color-white nav-link" href="#Developers">Developers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="color-white nav-link" href="#Subscribe">Subscribe</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="color-white nav-link" href="#contact">ContactUs</a>
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