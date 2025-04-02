import { Button } from "@/components/ui/button"
import { CameraIcon } from "lucide-react";
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
          <h1 className="text-4xl font-bold">Dotted Grid Background</h1>
        </div>
      </div>

      <div className="relative w-full h-screen bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Grid Background</h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-5xl">lol welcome to my website</h1>
      </div>

      <div className="flex flex-row items-center gap-4">
        <Button>
          <CameraIcon />
        </Button>
      </div>
    </main>
  );
}

