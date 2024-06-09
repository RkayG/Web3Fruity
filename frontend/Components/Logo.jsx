import React from "react";

const Logo = ({ color }) => {
  return (
    <img
      className={`w-8 ${color} text-teal-accent-400`}
      src="/images/logo.jpg"
    />
  );
};

export default Logo;
