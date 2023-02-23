import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function ParentusingContext() {
  const [user] = useState("selva");
  return (
    <UserContext.Provider value={user}>
      <h1>Parentusinglocalstate</h1>
      <Component1 user={user} />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <>
      <h2>component1</h2>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h2>component2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2>component3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h2>component4</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>component5</h2>
      <h3>{`user display ${user}`}</h3>
    </>
  );
}
