import React from "react";

export interface BodyProps {
  children?: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div>
      Body
      {children}
    </div>
  );
};

export default Body;
