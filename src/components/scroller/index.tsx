import clsx from "clsx";
import Image from "next/image";
import { MoveRight } from "lucide-react";

// animated
import Tree from "@/animated/tree";
import Branch from "@/animated/branch";
import Move from "@/animated/move";

// components
import Process from "../process";
import Button from "../button";
import Finance from "../finance";
import Transcript from "../transcript";
import Infos from "./infos";

const Scroller = () => {
  return (
    <div
      className={clsx(
        "w-[98%] h-full sticky top-0 overflow-x-auto overflow-y-hidden scrollbar-none"
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

          <Move
            delay={1.2}
            className="-left-10 shrink-0 absolute top-[50%] transform -translate-y-[50%]"
          >
            <Button variant="scroller" size="scroller">
              AI TRANSCRIPTION
            </Button>
          </Move>

          <Infos />

          <Move className="w-[480px] flex flex-col gap-4.5 shrink-0 absolute top-0 left-[745px]">
            <h3 className="h-[190px] font-[750] text-[50px] leading-[90%] -tracking-[0.05em] uppercase text-black">
              We don&apos;t just transcribe, we understand
            </h3>
          </Move>

          <Move
            delay={1.2}
            className="shrink-0 absolute top-[50%] left-[1120px] transform -translate-y-[50%]"
          >
            <Button variant="scroller" size="scroller">
              HUMAN EDITED
            </Button>
          </Move>

          <Finance />

          <Move className="shrink-0 absolute top-[50%] right-[940px] transform -translate-y-[50%]">
            <Button variant="scroller" size="scroller">
              API-READY FORMATS
            </Button>
          </Move>

          <Transcript />
        </div>

        <div className="pr-50">
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
