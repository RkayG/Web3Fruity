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

{/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                Web<span className="font-serif">3</span>Fruity
              </span> */}