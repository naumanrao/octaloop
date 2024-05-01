import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Roadmap from "@/components/Roadmap";
import FAQs from "@/components/Faqs";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Divider />
      <Services />
      <Gallery />
      <Roadmap />
      <FAQs />
    </main>
  );
}
