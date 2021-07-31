import React from 'react'
import "./static/styles/Login.css"
import svgIcon from "./static/images/notification.svg"
import eyeIcon from "./static/icons/eye.svg"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <main className="d-flex justify-content-center align-content-center">
            <div className="svg-container d-flex align-content-center">
                <img src={svgIcon} alt="" id="svgImage"/>
                <p id="registerPara">If you don't <br></br> have accout, you can &nbsp;
                <Link to="/register" className="text-decoration-none">register here</Link>
                </p>
            </div>
            <div className="login-form d-flex direction-column justify-content-center align-contents-center">
                <div className="form-input d-flex align-items-center justify-content-center">
                    <input type="text" placeholder="Enter Email or phone number" />
                </div>
                <div className="form-input d-flex align-items-center justify-content-center">
                <input type="password" placeholder="password" />
                <span><img src={eyeIcon} alt=""  id="eyeIcon"/></span>
                </div>
                <div className="forgot-container  d-flex align-items-center justify-content-center"style={{marginTop:"10px"}}>
                <Link to="/forgot" className="text-decoration-none" id="recovery">Recovery Password</Link>
                </div>
                <div className="submit-btn d-flex align-items-center justify-content-center ">
                <button type="submit" id="submitbtn">Submit</button>
                </div>
            </div>
        </main>
    )
}

export default Login
