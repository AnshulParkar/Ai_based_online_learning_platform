"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section: Logo & Explore */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800">MyApp</span>
          </Link>
          <Button variant="outline">Explore</Button>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
        </nav>

        {/* Right Section: Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>
        </div>

        {/* Mobile Menu Toggle */}
        <Button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Button variant="outline">Explore</Button>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost" className="w-full">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </SignedOut>
          </ul>
        </nav>
      )}
    </header>
  );
}
