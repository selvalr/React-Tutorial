import React from "react";

function UserLogin(props) {
  return <h1>Welcome back!</h1>;
}
function GuestLogin(props) {
  return <h1>Please sign up.</h1>;
}
function SignUp(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogin />;
  }
  return <GuestLogin />;
}

export default SignUp;
