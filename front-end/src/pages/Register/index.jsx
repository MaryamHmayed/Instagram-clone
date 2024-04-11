import React from "react";
import '../Login/style.css';
import { useNavigate } from "react-router-dom";
import './style.css';
import "../../styles/utilities.css"
import { requestMethods } from "../../core/enums/reqMethods";
import { sendRequest } from '../../core/remote/request'
import { useEffect,useState } from "react";

const Register=()=>{

    const navigate= useNavigate()


    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(()=>{
        handleRegister()
    },[]);
        

  const handleRegister =()=>{
    sendRequest("POST",'/register',{
        username:username,
        email:email,
        password:password,
    }).then((response)=>{
        navigate("/")
        console.log(response)
    }).catch((error)=>{
    console.log("signup unsuccessful", error)

  })}



    return (
    <>
     <div className="content-container">
     <section className="user">

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
        <input type="text" name="username" value={username}  placeholder="username" autoComplete="off"
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="inputs-container">
        <input type="email" name="email" value={email} placeholder="Email" autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        />

        </div>

        <div className="inputs-container">
        <input type="password" name="password" value={password} placeholder="Password" autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <a className="login-button" href="#" onClick={handleRegister}>Sign Up</a>


    </form>

    <div className="info-container flex column space-between center">
    <span>People who use our service may have uploaded your contact information to Instagram. Learn More</span>
    <br></br>
    <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
    </div>
    </div>


    <div className="signup-container">
    <p> Have an account? <a className="signup" onClick={() => {
        navigate("/");
        }} >login</a></p>
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

export default Register;