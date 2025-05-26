"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

// components
import Logo from "@/components/logo";
import Title from "@/components/title";
import Navlink from "@/components/navlink";

// content
import { NavLinks } from "@/content/navbar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[100vh]">
      <div
        className={clsx(
          "absolute top-0 left-0 w-full z-10 transition-all duration-500",
          showNav ? "slideUp opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <Title />
      </div>

      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-20 bg-white pl-[35px] pr-8 py-11 transition-all duration-500",
          showNav ? "slideDown opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <section className="flex items-center gap-[42px]">
            {NavLinks.map((link) => (
              <Navlink key={link.text} href={link.href} text={link.text} />
            ))}
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
