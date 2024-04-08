import React from "react";
import './style.css';
import Register from "../Register";
import { useNavigate } from "react-router-dom";




const Login=()=>{
    const navigate = useNavigate()











    return (
    <> 
    <div className="content-container">


    <section class="phones">
        <img src="./img/phones.png" alt="pictures on phone" class="phone-image"/>
        <div className="display-phone">
        <img className="picture" src="./img/photo-1.png" alt="#"/>
        <img className="picture" src="./img/photo-2.png" alt="#"/>
        <img className="picture" src="./img/photo-3.png" alt="#"/>
        <img className="picture" src="./img/photo-4.png" alt="#"/>
        <img className="picture" src="./img/photo-5.png" alt="#"/>
        </div>
    </section>


    <section class="user">

    <div className="login-container">


    <div className="instagram-logo-box">
        <img className="instagram-logo" src="./img/instagram-logo.png"/>
    </div>


    <form id="login-post" method="POST">
        <div className="inputs-container">
        <input type="text" name="username" placeholder="Phone number, username or email"/>
        </div>
        <div className="inputs-container">
        <input type="password" name="password" placeholder="Password"/>
        </div>
        <a className="login-button" href="#">Log In</a>

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
    <p>Don't have an account? <a class="signup" onClick={() => {
          navigate("./signup");
        }} >Sign up</a></p>
    </div>


    <div class="get-container">
    <p>Get the app.</p>
    <div class="download-container">
        <a class="download-appstore" href="#" ><img class="appstore"
            src="./img/googleplay-logo.png"/></a>
        <a class="download-googleplay" href="#" ><img class="googleplay"
            src="./img/microsoft.png"/></a>
    </div>
    </div>

    </section>

    </div>

    <footer class="page-footer">
    <span class="footer-span">
    © 2024 Instagram from Meta
    </span>


    </footer>

        </>
    )}

    export default Login;