import clsx from "clsx";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// animated
import Tree from "@/animated/tree";
import Branch from "@/animated/branch";
import Root from "@/animated/root";

// components
import Process from "../process";
import Button from "../button";
import Finance from "../finance";
import Transcript from "../transcript";

const Scroller = () => {
  return (
    <div
      className={clsx(
        "w-full h-full sticky top-0 overflow-x-auto overflow-y-hidden scrollbar-none"
      )}
      style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
    >
      <div className="h-full flex items-center">
        <Button
          variant="scroller"
          size="scroller"
          className="shrink-0 relative"
        >
          AUDIO INGESTION
        </Button>

        <div className="w-[100px] h-full relative shrink-0 -mr-6">
          <Image
            src="/assets/svg/connect.svg"
            alt="Connector"
            fill
            sizes="auto"
            className="object-contain"
          />
        </div>

        <div className="relative">
          <Tree />
          <Process />
        </div>

        <div className="relative">
          <Branch />

          <Button
            variant="scroller"
            size="scroller"
            className="shrink-0 absolute top-[50%] transform -translate-y-[50%]"
          >
            AI TRANSCRIPTION
          </Button>

          <div className="w-[480px] flex flex-col gap-4.5 shrink-0 absolute top-0 right-[450px]">
            <h3 className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black">
              We don&apos;t just transcribe, we understand
            </h3>
          </div>

          <Button
            variant="scroller"
            size="scroller"
            className="shrink-0 absolute top-[50%] right-28 transform -translate-y-[50%]"
          >
            HUMAN PERFECTION
          </Button>
        </div>

        <div className="relative pr-30">
          <Root />

          <Finance />

          <Button
            variant="scroller"
            size="scroller"
            className="shrink-0 absolute top-[50%] left-200 transform -translate-y-[50%]"
          >
            INTELLIGENT OUTPUT
          </Button>

          <Transcript />

          <Button
            variant="scroller"
            size="scroller"
            className="shrink-0 absolute top-[50%] left-460 transform -translate-y-[50%]"
          >
            WHERE OUR TRANSCRIPTS GO TO WORK
          </Button>
        </div>

        <div className="px-30">
          <Button className="shrink-0">
            <p className="whitespace-nowrap">BOOK A DEMO</p>
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
