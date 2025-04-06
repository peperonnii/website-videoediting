"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Testimonials() {
  return (
    <div className="relative bg-black text-white py-24 px-4">
      {/* Optional: background grid layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="question">What type of payment do you accept?</AccordionTrigger>
            <AccordionContent className="answer">
              I mostly deal in paypal, however I can accept blue-chip cryptocoins like BTC, ETH or SOL. Stablecoins like USDT is also accepted. I also take bank transfer if you prefer. No other forms of payment will be accepted.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="question">How much do you typically charge?</AccordionTrigger>
            <AccordionContent className="answer">
              It depends on the project! I cannot quote you for general prices because costs will vary depending on project duration, complexity and a variety of other factors. The best way is to get in touch with me to discuss your project requirements and I can then give you an accurate quote! :)
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="question">What software do you use to create your videos?</AccordionTrigger>
            <AccordionContent className="answer">
              It largely depends on the project but I use industry-standard software with a variety of high-end plugins such as:
              <ul className="list-disc pl-6 text-white">
                <li>Adobe After Effects 2025 (Motion graphics and VFX)</li>
                <li>Premiere pro 2025 (Video editing)</li>
                <li>Photoshop 2025 (graphic design)</li>
                <li>Blender (for 3D animation and modelling)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="question">What type of edits can you make? Can you make what I need?</AccordionTrigger>
            <AccordionContent className="answer">
              Of course! I can make any sort of edit you need, varying from short-form to long-form. There is nothing really out of my scope. I will let you know if there will be any difficulties making what you need during our initial project discussion, but generally, there is nothing I cannot do!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

