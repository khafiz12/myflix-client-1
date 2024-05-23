import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserInfo } from "./user-info";
import {Link} from "react-router-dom";
import {UserUpdate} from "./user-update";

export const ProfileView = ({ user }) => {
 if (!user) {
    return <div>User data not available</div>;
 }
    const { Username, Email, Birthday, Password } = user;

    return(
        <div>
            <UserInfo name ={user.Username} email = {user.Email} birthday = {user.Birthday} password = {user.Password} />
            <UserUpdate/>
        </div>
        
    )    
}