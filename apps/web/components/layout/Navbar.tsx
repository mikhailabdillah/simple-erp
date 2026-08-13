"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const position = useScrollPosition();
  const offset = 80;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        position.y > offset ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-20 px-4">
        <div className="grid h-full grid-cols-2 items-center lg:grid-cols-3">
          <div>
            <Link className="font-bold text-xl" href={"/"}>
              LOGO
            </Link>
          </div>
          <nav aria-label="Main menu" className="hidden lg:block">
            <ul className="flex justify-center gap-6 gap-x-10">
              <li>
                <Link
                  className="relative block py-1 font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="relative block py-1 font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="relative block py-1 font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end">
            <Button className={"rounded-full"}>Login / Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
