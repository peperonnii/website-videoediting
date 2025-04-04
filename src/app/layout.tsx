import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Geist, Geist_Mono, Tomorrow, Yesteryear, Syne_Mono } from "next/font/google";

import './styles/globals.css';
import './styles/main.css';

const tomorrow = Tomorrow({
  weight: "600",  // Specify the font weight if needed
  subsets: ["latin"], // You can include other subsets as needed
  variable: "--font-tomorrow",  // Optional: Declare a CSS variable for easy use
});

const syne = Syne_Mono({
  weight: "400",  // Specify the font weight if needed
  subsets: ["latin"], // You can include other subsets as needed
  variable: "--font-syne",  // Optional: Declare a CSS variable for easy use
});

const yesteryear = Yesteryear({
  weight: "400",  // Specify the font weight if needed
  subsets: ["latin"], // You can include other subsets as needed
  variable: "--font-yesteryear",  // Optional: Declare a CSS variable for easy use
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VFX & Video Editing Portfolio | [Your Name]",
  description: "Explore the creative world of [Your Name], a professional video editor and VFX artist. Discover a diverse portfolio of cinematic video edits, motion graphics, and stunning visual effects.",
  keywords: "VFX artist, video editor, motion graphics, video editing portfolio, visual effects, cinematic video, video production, professional video editing, creative VFX work",
  viewport: "width=device-width, initial-scale=1",
  twitter: {
    card: "summary_large_image",
    title: "VFX & Video Editing Portfolio | [Your Name]",
    description: "A showcase of cinematic edits and VFX artistry by [Your Name].",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tomorrow.variable} ${yesteryear.variable} ${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
