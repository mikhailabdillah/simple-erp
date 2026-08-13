"use client";

import { IconMenu3 } from "@tabler/icons-react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import LoginPopup from "../popup/Login";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const navLinks = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Pricing",
    url: "#pricing",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const position = useScrollPosition();
  const offset = 80;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        position.y > offset ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
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
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="relative block py-1 font-semibold before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100"
                    href={link.url}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-end gap-2">
            <LoginPopup />
            <Sheet>
              <SheetTrigger className="block px-4 lg:hidden">
                <IconMenu3 />
              </SheetTrigger>
              <SheetContent className="bg-background text-white">
                <SheetHeader>
                  <SheetTitle className="text-2xl">Menu</SheetTitle>
                  <ul className="mt-10 flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          className="relative py-1 font-semibold text-xl opacity-60 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:opacity-100 hover:before:scale-x-100"
                          href={link.url}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
