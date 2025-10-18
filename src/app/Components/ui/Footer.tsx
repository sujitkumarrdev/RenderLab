"use client";
import React from "react";
import Button from "@/app/Components/ui/Button";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // ✅ Footer hide only on /projects/[slug] routes
  const isProjectPage =
    pathname === "/projects" || pathname.startsWith("/projects/");

  if (isProjectPage) return null;

  return (
    <footer className="w-full">
      <div
        className="
          w-full text-white border-t border-gray-800 
          px-6 md:px-0 lg:px-28
          py-6
          flex flex-col md:grid 
          md:grid-cols-3 md:items-center
          gap-6 md:gap-0
        "
      >
        {/* Left section */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center md:justify-start relative -left-24 md:left-0">
          <Button
            href="https://codepen.io/sujitkoji"
            lowBorder={true}
            target="_blank"
          >
            CODEPEN
          </Button>

          <Button
            href="https://www.shadertoy.com/user/sujitkoji"
            lowBorder={true}
            target="_blank"
          >
            SHADER TOY
          </Button>
        </div>

        {/* Center section */}
        <div className="flex justify-center order-last md:order-none">
          <p className="text-sm md:text-base text-center">
            © 2025 KOJILAB. All rights reserved.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center md:justify-end relative -right-24 md:right-0 -mt-28 md:mt-0">
          <Button
            href="https://github.com/sujitkoji"
            lowBorder={true}
            target="_blank"
          >
            GITHUB
          </Button>

          <Button
            href="https://www.linkedin.com/in/sujitkoji"
            lowBorder={true}
            target="_blank"
          >
            LINKEDIN
          </Button>

          <Button
            href="https://twitter.com/sujitkoji"
            lowBorder={true}
            target="_blank"
          >
            X / TWITTER
          </Button>
        </div>
      </div>
    </footer>
  );
}
