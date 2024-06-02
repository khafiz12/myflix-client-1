import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };
    fetch("https://top-movies-flix-0061641eb1b3.herokuapp.com/User", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("SignUp successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="signUpForm">
      <div className="newUserDiv">
        <h1 className="newUserRegister">User Registeration</h1>
      </div>
      <Form.Group controlId="formUsername" className="userNameGroup">
        <Form.Label>Username</Form.Label>
        <Form.Control
          className="inputUser"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="userNameGroup">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="inputUser"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="userNameGroup">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="inputUser"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday" className="userNameGorup">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          className="inputUser"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </Form.Group>
      <button type="submit" className="signUpButton">
        Submit
      </button>
    </Form>
  );
};
