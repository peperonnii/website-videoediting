import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/navbar";
import Showcase from "@/components/showcase";


import Testimonials from "@/components/testimonials";

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

      <Testimonials />

    </main>
  );
}

