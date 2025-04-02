"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Home() {
  const gridRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const text = new SplitType('.intro-heading');

      gsap.from(text.chars, {
        y: "130%",
        rotation: 1080,
        opacity: 0,
        duration: 0.6,
        ease: "circ.inOut",
        stagger: 0.025,
      });
      let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
      tl.from(text.chars, {
        color: "#10f000",
        stagger: 0.02,
        duration: 0.5,
        ease: "elastic.in",
      });

      gsap.fromTo(
        gridRef.current,
        { opacity: 1, scale: 1.2, y: -1000 },
        { opacity: 2, scale: 1, y: 0, duration: 1.25, ease: "expo.out" }
      );
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-full h-screen bg-black">
        <div
          ref={gridRef}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1
            ref={titleRef}
            className="intro-heading pr-10 pl-10"
          >Best Video Editor In The Universe</h1>
        </div>
      </div>
    </main>
  );
}
