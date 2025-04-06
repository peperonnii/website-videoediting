"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Showcase() {
  const bgRef = useRef<HTMLDivElement>(null);

  const mainVideoIds = ["GGiKqoeY9I0", "GGiKqoeY9I0", "GGiKqoeY9I0", "GGiKqoeY9I0"]
  const [mainVideosLoaded, setMainVideosLoaded] = useState<boolean[]>([])

  // Shorts video grid
  const shortsVideoIds = ["Q_dHJIfo4qo", "Q_dHJIfo4qo"]
  const [shortsVideosLoaded, setShortsVideosLoaded] = useState<boolean[]>([])

  useEffect(() => {
    gsap.fromTo(bgRef.current, {
      scale: 0,
      duration: 10,
      ease: "expo.inOut",
    }, {
      scale: 1.2,
      duration: 4,
      delay: 3,
      ease: "expo.inOut",
    });
    setMainVideosLoaded(Array(mainVideoIds.length).fill(false))
    setShortsVideosLoaded(Array(shortsVideoIds.length).fill(false))

  }, []);

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full min-h-screen z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 20%, black 50%)",
          backgroundSize: "100% 100%", // Ensures full viewport coverage
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center p-6">
        <div className="flex justify-center pb-6">
          <h1 className="lfv">Long-Form Videos</h1>
        </div>
        <div className="space-y-24">
          {/* Main Video Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 md:gap-16 w-full h-full max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
            {mainVideoIds.map((videoId, index) => (
              <div key={`main-${index}`} className="w-full">
                <div className="relative aspect-video">
                  {!mainVideosLoaded[index] && (
                    <Skeleton className="absolute top-0 left-0 w-full h-full bg-accent/10 animate-pulse" />
                  )}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?controls=1&loop=1&autoplay=1&mute=1&vq=hd1080&modestbranding=1&showinfo=0`}
                    title={`Video ${index + 1}`}
                    loading="lazy"
                    onLoad={() => {
                      setMainVideosLoaded((prev) => {
                        const next = [...prev]
                        next[index] = true
                        return next
                      })
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center p-6">
          <div className="flex justify-center pb-6">
            <h1 className="lfv">Short-Form Videos</h1>
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-16 w-full h-full max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
            {shortsVideoIds.map((videoId, index) => (
              <div key={`short-${index}`} className="w-full">
                <div className="relative pb-[177.77%] h-0">
                  {!shortsVideosLoaded[index] && (
                    <Skeleton className="absolute top-0 left-0 w-full h-full bg-accent/10 animate-pulse" />
                  )}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?mute=1&autoplay=1`}
                    loading="lazy"
                    title={`YouTube Short ${index + 1}`}
                    onLoad={() => {
                      setShortsVideosLoaded((prev) => {
                        const next = [...prev]
                        next[index] = true
                        return next
                      })
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

