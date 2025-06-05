"use client";

import Button from "@/components/button";
import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Accuracy = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const bordered = "border-b border-dashed border-blue-100 inline-block";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHover(entry.isIntersecting);
      },
      {
        threshold: 0.8,
      }
    );

    const target = scrollContainer.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div ref={scrollContainer} className="w-full bg-white px-4 lg:px-8 py-16 sm:py-32">
      <div className="w-full sm:min-h-[595px] pb-[52px] pt-[52px] sm:pt-[113px] flex flex-col gap-[120px] bg-black-100 rounded-3xl">
        <div className="font-[700] text-white text-[42px] md:text-[64px] lg:text-[80px] leading-none -tracking-[0.04em]">
          <p className={clsx("pl-[30px] xl:pl-[82px] w-full", bordered)}>
            When accuracy <span className="hidden lg:inline">drives</span>
          </p>

          <p
            className={clsx(
              "lg:hidden pl-[30px] xl:pl-[82px] w-full",
              bordered
            )}
          >
            drives alpha,
          </p>

          <p className={clsx("pl-[30px] xl:pl-[82px] w-full my-1", bordered)}>
            <span className="hidden lg:inline">alpha,</span>{" "}
            <span
              className={clsx(
                "relative inline-flex",
                "before:absolute before:inset-0 before:bg-[#73AADB]/30 before:scale-x-0 before:origin-left",
                hover && "before:scale-x-100",
                "before:transition-transform before:duration-500 before:ease-in-out",
                "z-10"
              )}
            >
              <span className="relative z-10">“close enough”</span>
            </span>
          </p>

          <p className={clsx("pl-[30px] xl:pl-[82px] w-full my-1", bordered)}>
            <span
              className={clsx(
                "relative inline-flex",
                "before:absolute before:inset-0 before:bg-[#73AADB]/30 before:scale-x-0 before:origin-left",
                hover && "before:scale-x-100",
                "before:transition-transform before:duration-500 before:ease-in-out",
                "z-10"
              )}
            >
              <span className="relative z-10">
                shouldn’t be{" "}
                <span className="hidden lg:inline">good enough.</span>
              </span>
            </span>
          </p>

          <p
            className={clsx(
              "lg:hidden pl-[30px] xl:pl-[82px] w-full",
              bordered
            )}
          >
            <span
              className={clsx(
                "relative inline-flex ",
                "before:absolute before:inset-0 before:bg-[#73AADB]/30 before:scale-x-0 before:origin-left",
                hover && "before:scale-x-100",
                "before:transition-transform before:duration-500 before:ease-in-out",
                "z-10"
              )}
            >
              good enough.
            </span>
          </p>
        </div>

        <div className="mr-5 sm:mr-[52px] ml-auto max-w-[232px]">
          <Button className="hover:!text-white">
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accuracy;
