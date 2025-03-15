"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "@/components/header";
export default function Home() {
  return (
    <div>
      <Header/>
      <Button variant={"outline"}>Click me</Button>
    </div>

  );
}
