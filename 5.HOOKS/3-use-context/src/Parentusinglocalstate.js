import React, { useState } from "react";

export default function Parentusinglocalstate() {
  const [user] = useState("selva");
  return (
    <>
      <h1>Parentusinglocalstate</h1>
      <Component1 user={user} />
    </>
  );
}

function Component1({ user }) {
  return (
    <>
      <h2>component1</h2>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h2>component2</h2>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h2>component3</h2>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h2>component4</h2>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h2>component5</h2>
      <h3>{`user display ${user}`}</h3>
    </>
  );
}
