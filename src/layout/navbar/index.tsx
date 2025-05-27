"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

// components
import Logo from "@/components/logo";
import Navlink from "@/components/navlink";
import AnimatedLogo from "@/components/logo/animated-logo";

// content
import { NavLinks } from "@/content/navbar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[75vh]">
      <div
        className={clsx(
          "absolute top-0 left-0 w-full z-10 transition-all duration-500 px-1",
          showNav ? "slideUp opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <AnimatedLogo />
      </div>

      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-20 bg-white pl-[35px] pr-8 pt-11 pb-3 transition-all duration-500",
          showNav ? "slideDown opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <section className="flex items-start gap-[42px]">
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
