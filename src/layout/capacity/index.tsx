import PageEntrance from "@/components/entrance";
import { FileStack, MessageSquareQuote, ShieldCheck } from "lucide-react";

const Capacity = () => {
  const data = [
    {
      icon: <MessageSquareQuote size={56} strokeWidth="1" />,
      title: "Real-Time Transcription",
      boldText: "<1 second",
      text: "latency",
      boldSub: "1,000+",
      subtext: " concurrent streams",
    },
    {
      icon: <FileStack size={56} strokeWidth="1" />,
      title: "Monthly Capacity",
      boldText: "1,000 - 10,000+",
      text: "hours per client",
      boldSub: "Scale on demand",
      subtext: "",
    },
    {
      icon: <ShieldCheck size={56} strokeWidth="1" />,
      title: "Reliability",
      boldText: "99.9% uptime",
      text: "",
      boldSub: "",
      subtext: "SLA guaranteed",
    },
  ];

  return (
    <PageEntrance className="w-full bg-white lg:py-40 px-4 xx:px-8 xl:px-32 flex flex-col items-start gap-20 lg:gap-[120px]">
      <p className="max-w-[340px] md:max-w-full font-[750] text-[48px] md:text-[62px] xx:text-[56px] xl:text-[62px] leading-[90%] -tracking-[0.02em] uppercase">
        CAPACITY THAT SCALES
      </p>

      <div className="pb-20 lg:border-b-2 border-[#EDEDED] flex flex-col lg:flex-row justify-between gap-16 lg:gap-5 xl:gap-20">
        {data.map((item) => (
          <div
            key={item.title}
            className="min-w-[320px] flex items-center gap-8 text-black"
          >
            {item.icon}

            <div className="flex flex-col gap-3 xl:gap-6">
              <p className="font-[700] text-2xl leading-[130%]">{item.title}</p>

              <div>
                <p className="text-xl font-[400] leading-[130%]">
                  <span className="font-[700]">{item.boldText}</span>{" "}
                  {item.text}
                </p>
                <p className="text-xl font-[400] leading-[130%]">
                  <span className="font-[700]">{item.boldSub}</span>{" "}
                  {item.subtext}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageEntrance>
  );
};

export default Capacity;
