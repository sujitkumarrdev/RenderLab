"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // current page ka path

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      wheelMultiplier: 0.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const isProjectPage = pathname.includes("/src/app/projects/[slug]/page.tsx");

  return (
    <>
      {!isProjectPage &&<Navbar/>}
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>

      {!isProjectPage &&<Footer/>}
       
    </>
  );
}
