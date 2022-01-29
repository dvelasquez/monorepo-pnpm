import React from "react";

export interface BodyProps {
  children?: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div>
      Da Body
      {children}
    </div>
  );
};

export default Body;
