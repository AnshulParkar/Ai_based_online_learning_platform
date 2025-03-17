"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/header";
import { Hero } from "@/components/herosection";
import { Footerdemo } from "@/components/ui/footer-section";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Footerdemo />
    </div>

  );
}
