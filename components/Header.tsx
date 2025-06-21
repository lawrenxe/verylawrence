"use client";

import React from "react";

const Header = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="text-4xl font-bold text-black flex flex-row items-start gap-x-2 "
    >
      <h1>生活高手</h1>
    </div>
  );
};

export default Header;
