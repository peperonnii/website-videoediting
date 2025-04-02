import GridBackground from "@/components/GridBackground";

export const metadata = {
  title: "Dylan's VFX services",
  description: "Welcome to my personal portfolio website!",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <GridBackground />

      <div className="relative w-full h-screen bg-black">
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="p-4 w-full max-w-2xl">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GGiKqoeY9I0?controls=1&loop=1&autoplay=1&mute=1&vq=highres"
                title="Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="p-4 w-full max-w-2xl">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GGiKqoeY9I0?controls=1&loop=1&autoplay=1&mute=1&vq=hd10-80&modestbranding=1&showinfo=0"
                title="Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Why you should work with me!</h1>
          <div className="flex flex-col items-center">
          </div>
        </div>
      </div>

    </main>
  );
}

