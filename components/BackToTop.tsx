"use client";

import React from "react";

interface BTTProps {
  children: React.ReactNode;
}

const BackToTop = ({ children }: BTTProps) => {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="hover:cursor-pointer text-4xl font-bold text-black flex flex-row items-start gap-x-2 "
    >
      {children}
    </div>
  );
};

export default BackToTop;
