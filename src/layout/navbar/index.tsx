"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";

// components
import Logo from "@/components/logo";
import Navlink from "@/components/navlink";
import Title from "@/components/title";

// content
import { NavLinks } from "@/content/navbar";
import Button from "@/components/button";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const alreadyScrolled = window.scrollY > 200;
    setShowNav(alreadyScrolled);
    setHasMounted(true);

    const handleScroll = () => {
      setShowNav(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[83vh]">
      {hasMounted && (
        <AnimatePresence mode="wait">
          {!showNav && (
            <motion.div
              key="title"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <motion.nav
            initial={false}
            animate={{ opacity: showNav ? 1 : 0 }}
            transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
            className={clsx(
              "fixed top-0 left-0 w-full z-20 bg-white pl-[35px] pr-8 pt-11 pb-3 transition-all duration-500",
              hasMounted && showNav
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <section className="flex items-center gap-[42px]">
                {NavLinks.map((link) => (
                  <Navlink key={link.text} href={link.href} text={link.text} />
                ))}

                <Button>
                  <span>BOOK A DEMO</span>
                  <MoveRight />
                </Button>
              </section>
            </div>
          </motion.nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
