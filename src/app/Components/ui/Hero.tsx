"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 mt-0 overflow-hidden">
      <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#00C3FF] to-[#7A00FF] bg-clip-text text-transparent drop-shadow-md">
        RenderLab
      </h1>

      <p className="hero-sub mt-6 text-lg md:text-xl text-white max-w-2xl leading-relaxed">
        A curated collection of interactive visuals — built with pure GLSL or
        powered by React Three Fiber.
      </p>
    </section>
  );
}
