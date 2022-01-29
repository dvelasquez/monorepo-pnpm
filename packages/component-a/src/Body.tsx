import React from "react";

export interface BodyProps {
  children?: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div>
      Da Body people
      {children}
    </div>
  );
};

export default Body;
