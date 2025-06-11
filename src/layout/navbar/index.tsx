"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Title from "@/components/title";
import Button from "@/components/button";
import { AlignJustify, MoveRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollSpeed from "@/helpers/useScrollSpeed";
import { useIsMobile } from "@/helpers/useIsMobile";

const AnimatedLogo = ({ handleClick }: { handleClick: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const scrollSpeed = useScrollSpeed();
  const isMobile = useIsMobile();

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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 110);

      if (scrollY > 100 && scrollY < 1000 && scrollSpeed > 250) {
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
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.8 }
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
            "fixed top-0 left-0 w-full z-[120] bg-white",
            "lg:pl-[35px] pr-8 py-5 flex items-center"
          )}
        >
          {hasMounted && (
            <motion.div
              className="fixed z-50"
              initial={false}
              animate={
                hasMounted && !isScrolled && animate
                  ? {
                      top: "50%",
                      left: isMobile ? "50%" : "0",
                      y: "-50%",
                      x: isMobile ? "-50%" : "0",
                      opacity: titleOpacity,
                    }
                  : {
                      top: isMobile ? "16px" : "26px",
                      left: isMobile ? "12px" : "32px",
                      x: 0,
                      y: 0,
                      opacity: titleOpacity,
                    }
              }
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ transformOrigin: "top left" }}
            >
              <Title
                className={clsx(
                  hasMounted && !isScrolled && animate
                    ? "text-[85px] xs:text-[105px] sm:text-[140px] md:text-[200px] lg:text-[280px] xl:text-[398px] 2xl:text-[420px] 3xl:text-[480px]"
                    : "!text-[32px] !lg:text-[44px]"
                )}
              />
            </motion.div>
          )}

          <AnimatePresence>
            {isScrolled && (
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="ml-auto"
              >
                <div className="hidden lg:flex items-center gap-[42px]">
                  <Button size="nav" handleClick={handleClick}>
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
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
            className="fixed top-0 bg-white w-full h-screen flex lg:hidden flex-col justify-between pt-32 pb-7 px-5 z-[100]"
          >
            <Button
              size="nav"
              className="max-w-[212px]"
              handleClick={handleClick}
            >
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
