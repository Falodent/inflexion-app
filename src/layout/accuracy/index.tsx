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
      <div className="w-full h-[595px] pb-[52px] pt-[113px] flex flex-col gap-[120px] bg-black-100 rounded-3xl">
        <div className="font-[700] text-white text-[80px] leading-none -tracking-[0.04em]">
          <p className="pl-[82px] w-full border-b border-dashed border-blue-100 inline-block">
            When accuracy drives
          </p>
          <p className="pl-[82px] w-full border-b border-dashed border-blue-100 inline-block">
            alpha,{" "}
            <span
              className={clsx(
                "transition-all ease-in-out duration-500 inline-block mt-2",
                hover ? "bg-[#73AADB]/30" : "bg-transparent"
              )}
            >
              “close enough”
            </span>
          </p>
          <p className="pl-[82px] w-full border-b border-dashed border-blue-100 inline-block my-1">
            <span
              className={clsx(
                "transition-all ease-in-out duration-500 inline-block",
                hover ? "bg-[#73AADB]/30 " : "bg-transparent"
              )}
            >
              shouldn’t be good enough.
            </span>
          </p>
        </div>

        <div className="mr-[52px] ml-auto max-w-[232px]">
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
