"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/header";
import { Hero } from "@/components/herosection";
import { Footerdemo } from "@/components/ui/footer-section";
import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import { testimonials } from "@/Data/landing";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TestimonialsSection
        title="Trusted by Students/Teachers worldwide"
        description="Join thousands of users who are already building the future with our AI learning platform"
        testimonials={testimonials}
      />
      <Footerdemo />
    </div>

  );
}
