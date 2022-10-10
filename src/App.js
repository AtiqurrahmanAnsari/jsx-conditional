import React from "react";
import "./styles.css";

var username = "Atiqur Rahman";
var userLoggedIn = true;

export default function App() {
  function getUserMessage() {
    if (userLoggedIn) {
      return <em>{username}</em>;
    }
    return "user";
  }

  return (
    <div className="App">
      <h1>Welcome {getUserMessage()}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
