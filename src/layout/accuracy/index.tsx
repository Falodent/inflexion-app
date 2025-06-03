"use client";

import Button from "@/components/button";
import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Accuracy = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHover(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    const target = scrollContainer.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div ref={scrollContainer} className="w-full bg-white px-8 py-32">
      <div className="w-full h-[595px] pb-[52px] pr-[52px] pl-[82px] pt-[113px] flex flex-col gap-[120px] bg-black-100 rounded-3xl">
        <span className="max-w-[910px] font-[700] text-white text-[80px] leading-none -tracking-[0.04em]">
          When accuracy drives alpha,{" "}
          <span
            className={clsx(
              "transition-all ease-in-out duration-500 inline-block my-2",
              hover ? "bg-[#73AADB]/30" : "bg-transparent"
            )}
          >
            “close enough”
          </span>{" "}
          <span
            className={clsx(
              "transition-all ease-in-out duration-500 inline-block",
              hover ? "bg-[#73AADB]/30 " : "bg-transparent"
            )}
          >
            shouldn’t be good enough.
          </span>
        </span>

        <div className="ml-auto max-w-[232px]">
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
