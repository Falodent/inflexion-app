import clsx from "clsx";
import Image from "next/image";
import {
  AudioLines,
  Landmark,
  MoveRight,
  Percent,
  Search,
  Text,
} from "lucide-react";

// animated
import Tree from "@/animated/tree";
import Branch from "@/animated/branch";
import Root from "@/animated/root";
import Move from "@/animated/move";

// components
import Process from "../process";
import Button from "../button";
import Finance from "../finance";
import Transcript from "../transcript";
import Info from "../info";
import Frame from "../frame";

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

          <Info
            position="-top-7 left-[348px]"
            dropPosition="-bottom-28 -right-50"
            delay={0.3}
          >
            <Percent />
          </Info>

          <Info
            position="top-32 left-[410px]"
            dropPosition="-bottom-28"
            delay={0.8}
          >
            <AudioLines />
          </Info>

          <Info
            position="top-[50%] transform -translate-y-[50%] left-[485px]"
            delay={1.3}
          >
            <AudioLines />
          </Info>

          <Info position="bottom-30 left-[430px]" delay={1.8}>
            <Text />
          </Info>

          <Info
            position="-bottom-11 left-[345px]"
            dropPosition="-top-30"
            delay={2.3}
          >
            <Search />
          </Info>

          <Move className="w-[480px] flex flex-col gap-4.5 shrink-0 absolute top-0 right-[720px]">
            <h3 className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black">
              We don&apos;t just transcribe, we understand
            </h3>
          </Move>

          <Move
            delay={1.2}
            className="shrink-0 absolute top-[50%] right-90 transform -translate-y-[50%]"
          >
            <Button variant="scroller" size="scroller">
              HUMAN PERFECTION
            </Button>
          </Move>
        </div>

        <div className="relative pr-30">
          <Root />

          <Finance />

          <Move className="shrink-0 absolute top-[50%] left-170 transform -translate-y-[50%]">
            <Button variant="scroller" size="scroller">
              INTELLIGENT OUTPUT
            </Button>
          </Move>

          <Transcript />

          <Move className="shrink-0 absolute top-[50%] left-440 transform -translate-y-[50%]">
            <Button variant="scroller" size="scroller">
              WHERE OUR TRANSCRIPTS GO TO WORK
            </Button>
          </Move>

          <Frame
            delay={0.5}
            icon={<Landmark />}
            title="For Earnings Calls"
            content="Investor calls, analyst Q&A, and management commentary captured live. Real-time streaming lets buy-side teams act before the market by feeding models within seconds."
          />

          <Frame
            delay={1}
            icon={<div className="h-1" />}
            position="top-[50%] transform -translate-y-[50%]"
            title="For Public Events"
            content="Conferences, round-tables, and off-stage interviews from industry forums. Near-real-time transcripts surface sentiment shifts and competitive signals while sessions are still in progress."
          />

          <Frame
            delay={1.5}
            icon={<div className="h-1" />}
            position="-bottom-20"
            title="For Expert Calls"
            content="Private consultant calls, insight-library sessions, and specialist forums. Our 99.9% human-edited tier turns the transcript itself into a saleable asset for firms that licence expert content."
          />
        </div>

        <div className="px-50">
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
