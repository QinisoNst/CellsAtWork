import React, { HTMLProps } from "react";

interface GradientBackgroundProps extends HTMLProps<HTMLDivElement> {}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, ...props }) => {
  return (
    <div className="background-gradient" {...props}>
      {children}
    </div>
  );
};

export default GradientBackground;
