import React from "react";
import '../Login/style.css';
import login from "../Login";
import { useNavigate } from "react-router-dom";
import './style.css';
import "../../styles/utilities.css"

const Register=()=>{

    const navigate= useNavigate()






    return (
    <>
     <div className="content-container">
     <section class="user">

    <div className="login-container">


    <div className="instagram-logo-box">
        <img className="instagram-logo" src="./img/instagram-logo.png"/>
        <span>Sign up to see photos and videos from your friends.</span>
    </div>
        
    <div className="facebook-container ">
    <a className="login-button fb-signup" href="#" >
    Log in with Facebook</a>
           
        </div>
    <div className="or-container">
        <div className="line"></div>
        <div className="or">OR</div>
        <div className="line"></div>
    </div>

    


    <form id="login-post" method="POST">
        <div className="inputs-container">
        <input type="text" name="username" placeholder="Email"/>
        </div>
        <div className="inputs-container">
        <input type="username" name="password" placeholder="Username"/>
        </div>

        <div className="inputs-container">
        <input type="password" name="password" placeholder="Password"/>
        </div>
        <a className="login-button" href="#">Sign Up</a>


    </form>

    <div className="info-container flex column space-between center">
    <span>People who use our service may have uploaded your contact information to Instagram. Learn More</span>
    <br></br>
    <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
    </div>
    </div>


    <div className="signup-container">
    <p> Have an account? <a class="signup" onClick={() => {
        navigate("/");
        }} >login</a></p>
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

export default Register;