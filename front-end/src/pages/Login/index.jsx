import React from "react";
import './style.css';
import Register from "../Register";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
// import { useHistory } from 'react-router-dom'
import { requestMethods } from "../../core/enums/reqMethods";
import { sendRequest } from '../../core/remote/request'


const Login=()=>{
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        handleLogin()
    },[]);
        

  const handleLogin =()=>{
    sendRequest("POST",'/login',{
        email:email,
        password:password,
    }).then((response)=>{
        navigate("./feed")
        console.log(response)
    }).catch((error)=>{
    console.log("login unsuccessful", error)

  })}





  return (
    <> 
    <div className="content-container">


    <section className="phones">
        <img src="./img/phones.png" alt="pictures on phone" className="phone-image"/>
        <div className="display-phone">
        <img className="picture" src="./img/photo-1.png" alt="#"/>
        <img className="picture" src="./img/photo-2.png" alt="#"/>
        <img className="picture" src="./img/photo-3.png" alt="#"/>
        <img className="picture" src="./img/photo-4.png" alt="#"/>
        <img className="picture" src="./img/photo-5.png" alt="#"/>
        </div>
    </section>


    <section className="user">

    <div className="login-container">


    <div className="instagram-logo-box">
        <img className="instagram-logo" src="./img/instagram-logo.png"/>
    </div>


    <form id="login-post" method="POST">
        <div className="inputs-container">
        <input type="text" name='email' value={email} autoComplete="off"
            onChange={(e) => setEmail(e.target.value)} placeholder="Phone number, username or email"/>
        </div>
        <div className="inputs-container">
        <input type="password" name="password" value={password} autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
        </div>
        <a className="login-button" href="#" onClick={handleLogin}>Log In</a>

        <div className="or-container">
        <div className="line"></div>
        <div className="or">OR</div>
        <div className="line"></div>
        </div>


        <div className="facebook-container">
        <a className="facebook-login" href="#" >
            <img className="facebook-logo"src="./img/facebook-logo.png"/>Log in with Facebook
            </a>
        </div>
    </form>


    <a className="password-forgot" href="#" >Forgot password?</a>
    </div>


    <div className="signup-container">
    <p>Don't have an account? <a className="signup" onClick={() => {
          navigate("./signup");
        }} >Sign up</a></p>
    </div>


    <div className="get-container">
    <p>Get the app.</p>
    <div className="download-container">
        <a className="download-appstore" href="#" ><img className="appstore"
            src="./img/googleplay-logo.png"/></a>
        <a className="download-googleplay" href="#" ><img className="googleplay"
            src="./img/microsoft.png"/></a>
    </div>
    </div>

    </section>

    </div>

    <footer className="page-footer">
    <span className="footer-span">
    © 2024 Instagram from Meta
    </span>


    </footer>

        </>
    )}

    export default Login;