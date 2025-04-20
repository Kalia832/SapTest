import React from "react";

const Navbar = ({ username, children }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between align-items-center">
      <span className="navbar-brand">📝 Online Test</span>
      <div>{children}</div> {/* Timer goes here */}
      <span className="text-white">{username}</span>
    </nav>
  );
};

export default Navbar;
