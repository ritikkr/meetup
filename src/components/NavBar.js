import React from 'react'
import "./static/styles/NavBar.css"
import sunIcon from "./static/icons/sun.svg"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <nav className="d-flex space-between align-items-center ">
                <div className="logo-container">
                    <div className="logo d-flex justify-content-center align-items-center ">
                        <p id="logoPara" className="text-white text-align-center">M</p>
                    </div>
                </div>
                <div className="menu-container ">
                        <div className="menu d-flex flex-end direction-row">
                            <div className="mode-switch d-flex justify-content-center">
                                <img src={sunIcon} alt="Mode" id="mode" />
                            </div>
                            <div className="help d-flex justify-content-center">
                                <Link className="text-align-center" to="/help">
                                        Help
                                </Link>
                            </div>
                            <div className="login active d-flex justify-content-center">
                            <Link className="text-align-center " href="/login" >
                                        Login
                                </Link>
                            </div>
                            <div className="register d-flex justify-content-center">
                            <Link className="text-align-center" to="#">
                                       Register
                                </Link>
                            </div>
                        </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
