"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    gsap.fromTo(
      ".nav-logo",
      { backgroundPosition: "200% 0" },
      { backgroundPosition: "0% 0", duration: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="w-full fixed text-[#cacaca] top-0 left-0 z-10 px-4 lg:px-11 py-3 lg:py-4 flex items-center justify-between">
       <Link
        href="/"
        className="nav-logo text-[16px] lg:text-xl font-semibold tracking-tight cursor-pointer"
      >
        <Image
          width={28}
          height={28}
          src="/Crystal_PNG.png"
          alt="Logo"
          className="inline-block mr-0 h-6 w-6 lg:h-7.5 lg:w-7.5 mb-1 lg:mb-1.5"
        />
        KOJILAB
      </Link>
                        {/* point */}
       {isHome && (
        <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full animate-pulse-glow -mr-1 lg:-mr-2 cursor-pointer" />
      )}
    </nav>
  );
}
