"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Title from "@/components/title";
// import { NavLinks } from "@/content/navbar";
// import Navlink from "@/components/navlink";
import Button from "@/components/button";
import { AlignJustify, MoveRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSpeed from "@/helpers/useScrollSpeed";

const AnimatedLogo = () => {
  const container = useRef<HTMLDivElement>(null);
  const scrollSpeed = useScrollSpeed();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(1);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const alreadyScrolled = window.scrollY > 70;
    setIsScrolled(alreadyScrolled);
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 110);

      const scrollY = window.scrollY;

      if (scrollY > 100 && scrollY < 850 && scrollSpeed > 250) {
        setTitleOpacity(0.4);
      } else {
        setTitleOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollSpeed]);

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
    <>
      <div ref={container} className="relative h-[82vh] lg:h-[95vh] bg-white">
        <div
          className={clsx(
            "fixed top-0 left-0 w-full z-50 bg-white",
            "lg:pl-[35px] pr-8 py-5 flex items-center"
          )}
        >
          {hasMounted && (
            <div
              className={clsx(
                "fixed z-50 transition-all duration-700 ease-in-out",
                hasMounted && !isScrolled && animate
                  ? "w-full lg:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "top-4.5 left-4.5 lg:top-7.5 lg:left-[35px]"
              )}
            >
              <div
                style={{
                  opacity: titleOpacity,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <Title
                  className={clsx(
                    hasMounted && !isScrolled && animate
                      ? "text-[85px] xs:text-[105px] sm:text-[140px] md:text-[200px] lg:text-[280px] xl:text-[393px] 2xl:text-[420px] 3xl:text-[480px]"
                      : "!text-[32px] !lg:text-[44px] transition-all ease-in-out duration-800"
                  )}
                />
              </div>
            </div>
          )}

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
                  {/* {NavLinks.map((link) => (
                    <Navlink
                      key={link.text}
                      href={link.href}
                      text={link.text}
                    />
                  ))} */}

                  <Button size="nav">
                    <span>BOOK A DEMO</span>
                    <MoveRight />
                  </Button>
                </div>

                <button
                  className="cursor-pointer lg:hidden text-black"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {!open ? <AlignJustify size={24} /> : <X size={24} />}
                </button>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
            className="fixed top-0 bg-white w-full h-screen flex lg:hidden flex-col justify-between pt-32 pb-7 px-5 z-30"
          >
            {/* <div className="max-w-fit flex flex-col gap-10">
              {NavLinks.map((link) => (
                <Navlink key={link.text} href={link.href} text={link.text} />
              ))}
            </div> */}

            <Button size="nav" className="max-w-[212px]">
              <span>BOOK A DEMO</span>
              <MoveRight />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedLogo;
