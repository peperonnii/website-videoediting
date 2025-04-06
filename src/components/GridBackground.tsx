"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Separator } from "@/components/ui/separator";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RxDiscordLogo } from "react-icons/rx";
import { LuSend } from "react-icons/lu";
import { Copy, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";

export default function Home() {
  const gridRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const buttonRef = useRef(null);

  const discordHandle = 'YourDiscordHandle#1234';

  useEffect(() => {
    if (typeof window !== "undefined") {
      const text = new SplitType('.intro-heading');
      const authorText = new SplitType('.author-description');

      gsap.from(text.chars, {
        y: "130%",
        rotation: 1080,
        opacity: 0,
        duration: 0.6,
        ease: "circ.inOut",
        stagger: 0.025,
      });
      gsap.from(authorText.chars, {
        x: "110%",
        opacity: 0,
        duration: 0.3,
        ease: "elastic.in",
        delay: 0.7,
        stagger: 0.02,
      });
      gsap.from(authorRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "expo.in"
      });

      gsap.fromTo(buttonRef.current, {
        scale: 2,
        duration: 2,
        delay: 2,
        ease: "bounce.inOut"
      }, {
        scale: 1,
        duration: 1.2,
        ease: "bounce.inOut"
      });

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
      tl.from(text.chars, {
        color: "#10f000",
        scale: 1.2,
        letterSpacing: 1.5,
        textShadow: "2px 10px 10px rgba(255, 255, 255, 0.2)",
        stagger: 0.025,
        duration: 0.25,
        ease: "bounce.inOut",
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

          <div ref={authorRef} className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-col space-y-3 w-full max-w-md px-4 ">
              <div className="space-y-1 author-box">
                <h4 className="text-sm font-medium leading-none author-name">Dylan Byrne</h4>
                <p className="text-sm text-muted-foreground author-description">
                  There is a war for your viewer&apos;s attention out there. I craft premium video edits that deliberately engage your audience whilst realising your video&apos;s potential inside the algorithm.
                </p>
              </div>

              <Separator className="my-4" />
              <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                <div>
                  <Button variant="ghost" size="icon" className="mx-6">
                    <Link href="https://x.com/peperronnii" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <BsTwitterX className="!w-6 !h-6" />
                    </Link>
                  </Button>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="mx-6">
                        <RxDiscordLogo className="!w-6 !h-6" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="bg-foreground text-background sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center">
                          <LuSend className="mr-2" />
                          Send me a DM!
                        </DialogTitle>
                      </DialogHeader>
                      <div className="relative mt-4 z-50">
                        <Input
                          value={discordHandle}
                          readOnly
                          className="pr-12 font-mono"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            toast("Event has been created", {
                              description: "Sunday, December 03, 2023 at 9:00 AM",
                            })
                          }
                          className="absolute right-1 top-1/2 -translate-y-1/2 !m-0"
                        > <Copy />
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Separator orientation="vertical" />
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="mx-6">
                        <HiOutlineMail className="!w-6 !h-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-foreground text-background sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex flex-row items-center">
                          Mail currently unavailable :(
                        </DialogTitle>
                        <p>Send me a DM or book a call instead!</p>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div ref={buttonRef} className="flex justify-center items-start pt-16 pb-10">

              <Button variant={"outline"} >
                <PhoneCall />
                <Link href="https://cal.com/fvnky" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Book a Call With Me Now!</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main >
  );
}
