"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Separator } from "@/components/ui/separator";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RxDiscordLogo } from "react-icons/rx";
import { Button } from "./ui/button";

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
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
      tl.from(text.chars, {
        color: "#10f000",
        stagger: 0.025,
        duration: 0.25,
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
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {/* Background Grid */}
        <div
          ref={gridRef}
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Top Section - Heading */}
          <div className="flex-2 flex items-center justify-center">
            <h1
              ref={titleRef}
              className="intro-heading px-10 text-center text-4xl md:text-6xl font-bold"
            >
              Best Video Editor In The Universe?
            </h1>
          </div>

          {/* Bottom Section - Placeholder Paragraph */}

          <div className="flex-1 flex items-start justify-center">
            <div className="flex flex-col space-y-4 w-full max-w-md px-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none author-name">Dylan Byrne</h4>
                <p className="text-sm text-muted-foreground author-description">
                  There is a war for your viewer&apos;s attention out there. I craft premium video edits that deliberately engage your audience whilst realising your video&apos;s potential inside the algorithm.
                </p>
              </div>

              <Separator className="my-4" />
              <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                <div>
                  <Button variant="ghost" size="icon" className="mx-6">
                    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <BsTwitterX className="!w-6 !h-6" />
                    </Link>
                  </Button>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <Button variant="ghost" size="icon" className="mx-6">
                    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <RxDiscordLogo className="!w-6 !h-6" />
                    </Link>
                  </Button>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <Button variant="ghost" size="icon" className="mx-6">
                    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <HiOutlineMail className="!w-6 !h-6" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
