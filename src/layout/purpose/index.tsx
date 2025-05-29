import Button from "@/components/button";
import Frame from "@/components/frame";
import { MoveRight } from "lucide-react";

const Purpose = () => {
  const data = [
    {
      icon: "purpose1.svg",
      title: "For Earnings Calls",
      content:
        "Investor calls, analyst Q&A, and management commentary captured live. Real-time streaming lets buy-side teams act before the market by feeding models within seconds.",
    },
    {
      icon: "purpose2.svg",
      title: "For Expert Calls",
      content:
        "Conferences, round-tables, and off-stage interviews from industry forums. Near-real-time transcripts surface sentiment shifts and competitive signals while sessions are still in progress.",
    },
    {
      icon: "purpose3.svg",
      title: "For Public Events",
      content:
        "Private consultant calls, insight-library sessions, and specialist forums. Our 99.9% human-edited tier turns the transcript itself into a saleable asset for firms that licence expert content.",
    },
  ];

  return (
    <div className="w-full flex justify-center gap-20 relative py-50 pb-60 bg-white">
      <div className="w-[530px] flex flex-col gap-16">
        <h2 className="font-[720] text-[62px] leading-[64px] -tracking-[0.04em] text-[#0A0A0A] uppercase">
          Purpose-Built for Every Finance Use Case
        </h2>

        <p className="max-w-[395px] text-xl leading-[28px] text-black">
          From public equities earnings calls to expert consultant calls —
          INFLXD transcribes leads the industry in fast and accurate
          transcripts.
        </p>

        <Button className="max-w-[232px]">
          <span>BOOK A DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <div className="flex flex-col gap-7">
        {data?.map((item) => (
          <Frame
            key={item.icon}
            content={item.content}
            icon={item.icon}
            title={item.title}
            delay={0.3}
          />
        ))}
      </div>
    </div>
  );
};

export default Purpose;
