"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    gsap.fromTo(
      ".nav-logo",
      { backgroundPosition: "200% 0" },
      { backgroundPosition: "0% 0", duration: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-10 px-4 lg:px-11 py-3 lg:py-4">
      <Link
        href="/"
        className="nav-logo text-[16px] lg:text-xl font-semibold tracking-tight cursor-pointer bg-gradient-to-r from-[#00C3FF] to-[#7A00FF] bg-clip-text text-transparent"
      >
        RENDER<span className="text-gray-300">LAB</span>
      </Link>
    </nav>
  );
}
