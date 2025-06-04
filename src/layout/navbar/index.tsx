"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Title from "@/components/title";
import { NavLinks } from "@/content/navbar";
import Navlink from "@/components/navlink";
import Button from "@/components/button";
import { AlignJustify, MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedLogo = () => {
  const container = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const alreadyScrolled = window.scrollY > 100;
    setIsScrolled(alreadyScrolled);
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.8,
      }
    );

    const target = container.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div ref={container} className="relative h-[95vh] bg-white">
      <div
        className={clsx(
          "fixed top-0 left-0 w-full z-20 bg-white",
          "lg:pl-[35px] pr-8 pt-7 lg:pt-9 pb-3 flex items-center"
        )}
      >
        <div
          className={clsx(
            "fixed z-50 transition-all duration-700 ease-in-out",
            hasMounted && !isScrolled
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "top-6 left-4.5 lg:top-11.5 lg:left-[35px]"
          )}
        >
          <Title
            className={clsx(
              hasMounted && !isScrolled && animate
                ? "text-[107px] sm:text-[140px] md:text-[200px] lg:text-[280px] xl:text-[393px] 2xl:text-[420px] 3xl:text-[480px]"
                : "!text-[32px] !lg:text-[44px] transition-all ease-in-out duration-800"
            )}
          />
        </div>

        <AnimatePresence>
          {isScrolled && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="ml-auto"
            >
              <div className="hidden lg:flex items-center gap-[42px]">
                {NavLinks.map((link) => (
                  <Navlink key={link.text} href={link.href} text={link.text} />
                ))}

                <Button size="nav">
                  <span>BOOK A DEMO</span>
                  <MoveRight />
                </Button>
              </div>

              <button className="cursor-pointer lg:hidden">
                <AlignJustify size={24} color="#000000" />
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedLogo;
