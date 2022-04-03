import React from "react";
import Title from "./Title";
import Body from "./Body";

const ComponentA = () => {
  return (
    <div>
      <Title />
      <Body>Hello from Component A</Body>
      <footer>This is a test footer</footer>
    </div>
  );
};

export { ComponentA };
