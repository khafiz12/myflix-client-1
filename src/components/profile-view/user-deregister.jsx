import React from "react";
import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

export const UserDelete = () => {
    const [message, setMessage] = useState("");
    const [storedUser, setStoredUser] = useState(JSON.parse(localStorage.getItem("user")) || {});   
    const [storedToken, setStoredToken] = useState(localStorage.getItem("token") || "");
    const handleDelete = async () => {
        if (!storedToken) {
            console.log("Token not found in localstorage");
            return;
        }

        try {
            const response = await fetch(`https://top-movies-flix-0061641eb1b3.herokuapp.com/User/${storedUser.Username}`,
          {
            method: "DELETE",
            headers:{
                Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        if (response.ok) {
            setMessage("User deleted successfully");
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        } else{
            setMessage("Error deleting user");
        }
        } catch (error) {
            console.error("Error deleting user", error);
            setMessage("Error deleting user");
        }
    };
    return(
        <div>
            <h1>Delete Sccount</h1>
            <p>{message}</p>
            <Button onClick={handleDelete}>Delete Account</Button>
        </div>
    );
};