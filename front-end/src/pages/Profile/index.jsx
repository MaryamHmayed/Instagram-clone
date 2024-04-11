import React from "react";
import "../../styles/utilities.css";
import './style.css'
import Sidebar from "../Feed/components/Sidebar/sidebar";

const Profile =()=>{
    return (
        <>
        <div className="flex gap-20">
        <Sidebar/>
        <div className="profile-container flex gap-40">
            <img className="profile-image" src="./img/photo-1.png" alt="#"/>
            <div className="profile-info flex column gap-10">
                <input className="username"placeholder="Username" />
                <input className="bio" placeholder="Bio"/>

            </div>
        
        
        </div>
        </div>
      
        
        






        </>
    )
}




export default Profile;