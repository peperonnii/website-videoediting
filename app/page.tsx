// app/page.tsx
import Image from "next/image";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website!",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-400 mb-6">Showcasing my projects and skills in web development.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition">
          View My Work
        </button>
      </div>
    </main>
  );
}
