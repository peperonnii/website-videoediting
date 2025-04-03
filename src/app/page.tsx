import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/navbar";
import Showcase from "@/components/showcase";

export const metadata = {
  title: "Dylan's VFX Studio",
  description: "Welcome to my personal portfolio website!",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">

      <Navbar />

      <GridBackground />

      <Showcase />

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

