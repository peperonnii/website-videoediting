"use client";

import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react"
import { Button } from "./ui/button";
import Link from "next/link";

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

      <div className="flex items-center justify-center space-x-2">
        <Button variant={"outline"} >
          <PhoneCall />
          <Link href="https://cal.com/fvnky" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Ready to Book a Call?</Link>
        </Button>
      </div>
    </nav>
  );
}

