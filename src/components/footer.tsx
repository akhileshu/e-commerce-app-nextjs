"use client"
import React from "react";

function Footer() {
  return (
    <div>
      <BackToTop />
    </div>
  );
}

function BackToTop() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        // behavior: "smooth",
      });
    };
  return (
    <div
      onClick={scrollToTop}
      className="text-center min-w-full text-sm text-white bg-amazon-steel-blue py-3"
    >
      Back to top
    </div>
  );
}

export default Footer;
