"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";


export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
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

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
      <Footer/>
    </>
  );
}
