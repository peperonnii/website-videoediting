"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Show navbar after 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-500 ${isVisible
        ? "opacity-100 bg-black/30 backdrop-blur-xl shadow-xl"
        : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#projects" className="text-white">Projects</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

