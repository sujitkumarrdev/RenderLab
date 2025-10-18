"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkButton from "@/app/Components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

   const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    gsap.fromTo(
      ".nav-logo",
      { backgroundPosition: "200% 0" },
      { backgroundPosition: "0% 0", duration: 3, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-10 py-4">
         <div className="flex items-center space-x-2 font-bold text-lg md:text-xl">
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
        </div>

         {!isProjectPage && (
          <>
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 lg:space-x-4 text-[14px] lg:text-[16px] font-medium">
              <LinkButton href="/" lowBorder={true}>HOME</LinkButton>
              <LinkButton href="/About" lowBorder={true}>ABOUT</LinkButton>
              <LinkButton href="/Blog" lowBorder={true}>BLOG</LinkButton>
              <LinkButton href="/Contacts" lowBorder={true} showArrow={true}>
                CONTACTS
              </LinkButton>
            </nav>

            {/* Right side indicator */}
            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full animate-pulse-glow -mr-1 lg:-mr-2 cursor-pointer" />

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden absolute right-4 top-3">
              <label className="hamburger">
                <input
                  type="checkbox"
                  checked={menuOpen}
                  onChange={() => setMenuOpen(!menuOpen)}
                />
                <svg viewBox="0 0 32 32" className="w-9 h-9">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 
                       9 3.5 10.8 2 13 2 
                       15.2 2 17 3.8 17 6L17 26 
                       C17 28.2 18.8 30 21 30 
                       23.2 30 25 28.2 25 26 
                       25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>

              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-40 flex flex-col items-center justify-center bg-[#111] rounded-xl shadow-lg p-4">
                  <ul className="space-y-3">
                    <li><Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link href="/About" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link href="/Blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
                    <li><Link href="/Contacts" onClick={() => setMenuOpen(false)}>CONTACTS</Link></li>
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
