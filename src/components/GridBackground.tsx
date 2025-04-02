"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Home() {
  const gridRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current,
      { opacity: 1, scale: 0.8, y: -1000 },
      { opacity: 2, scale: 1, y: 0, duration: 1.25, ease: "expo.out" }
    );
    if (typeof window !== "undefined") {
      // Apply SplitType to elements with the [animate] attribute
      const typeSplit = new SplitType("[animate]", {
        types: ["lines", "words", "chars"],
        tagName: "span",
      });
      console.log(typeSplit);

      // Animate the elements using GSAP
      gsap.from("[animate] .intro-heading", {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "elastic.inOut",
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-full h-screen bg-black">
        <div
          ref={gridRef}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(128,128,128,0.3)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1
            ref={titleRef}
            className="intro-heading"
          >Dotted Grid Animated</h1>
        </div>
      </div>
    </main>
  );
}
