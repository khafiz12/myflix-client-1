import React from "react";
import {useState, useEffect} from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const data = { 
            Username: Username,
            Password: Password
        };
    fetch("https://top-movies-flix-0061641eb1b3.herokuapp.com/login?Username=&Password=", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((data) => {
        console.log("Login response:", data);
        if(data.user) { 
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
        } else {
            alert("No such user");
        }
      })
     .catch((error) => {
        console.error("Error occurred during login", error);
        if (error.response) {
            console.error("Server responded with.", error.response.data);
        }
        alert("Something went wrong");
     });        
   };
   
 return (
    <form onSubmit={handleSubmit}> 
        <label>
            Username:
            <input 
            type="text" 
            value={Username}
            onChange={(e) => setUsername (e.target.value)}required
             />
        </label>
        <label>
            Password:
            <input 
            type="password"
            value={Password}
            onChange={(e) => setPassword (e.target.value)}required />
        </label>
        <button type= "submit">Submit</button>
    </form>
 );
};