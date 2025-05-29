"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

// components
import Logo from "@/components/logo";
import Navlink from "@/components/navlink";
import Title from "@/components/title";

// content
import { NavLinks } from "@/content/navbar";

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
        <motion.div
          className={clsx(
            "z-10 ",
            hasMounted && showNav ? "fixed origin-top-left" : "absolute"
          )}
          initial={false}
          animate={{
            top: hasMounted && showNav ? "-70px" : "50%",
            left: hasMounted && showNav ? "-100px" : "50%",
            x: hasMounted && showNav ? "0%" : "-50%",
            y: hasMounted && showNav ? "0%" : "-50%",
          }}
          transition={
            showNav ? { duration: 1.4, ease: "easeInOut" } : { duration: 0 }
          }
        >
          <Title className={clsx(hasMounted && showNav && "!text-[39px]")} />
        </motion.div>
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
            transition={{ delay: showNav ? 0.7 : 0 }}
            className={clsx(
              "fixed top-0 left-0 w-full z-20 bg-white pl-[35px] pr-8 pt-11 pb-3 transition-all duration-500",
              hasMounted && showNav
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
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
          </motion.nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
