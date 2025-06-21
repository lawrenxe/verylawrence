"use client";

import React, { useEffect, useState } from "react";

const Divider = () => {
  const [border, setBorder] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".sticky");
      if (header) {
        if (window.scrollY > 36) {
          setBorder(true);
        } else {
          setBorder(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${
        border ? "opacity-100 border-black" : "opacity-0 border-white"
      } border-t-[1px] fixed top-[48px] z-10`}
    ></div>
  );
};

export default Divider;
