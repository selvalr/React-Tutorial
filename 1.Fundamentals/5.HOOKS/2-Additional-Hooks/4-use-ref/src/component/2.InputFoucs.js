//2.DOm Access

import React, { useEffect, useRef } from "react";

export default function InputFocus() {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <>
      <input ref={textRef} type="text"></input>
    </>
  );
}
