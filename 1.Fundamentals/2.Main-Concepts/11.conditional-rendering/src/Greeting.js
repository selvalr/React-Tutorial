import React from "react"
import GuestGreeting from "./GuestGreting.js"
import UserGreeting from "./UserGreeting"



function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;