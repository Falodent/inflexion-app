import Button from "@/components/button";
import clsx from "clsx";
import { MoveRight, ShieldCheck, ShieldEllipsis } from "lucide-react";

const Security = ({ isVisible }: { isVisible: boolean }) => {
  const data = [
    {
      icon: <ShieldCheck size={64} />,
      title: "Enterprise-Grade Security",
      list: [
        "Upcoming MNPI flagging engine and compliance dashboards mirror expert-network best practice.",
        "On-demand PII and audio redaction; rules can follow your firm’s policy tags.",
        "Editorial teams custom-trained on client style guides, legal verbs, and escalation paths.",
      ],
    },
    {
      icon: <ShieldEllipsis size={64} />,
      title: "Compliance Workflow Support",
      list: [
        "Options to deploy in your cloud or route straight to S3/GCS buckets.",
        "Single-tenant storage, key segregation, and zero shared infrastructure by default.",
        "Custom data-cleansing windows (3-, 7-, 30-day) to meet internal retention policies.",
      ],
    },
  ];

  return (
    <section
      className={clsx(
        "w-full py-40 pl-4 pr-2 lg:pl-[30px] lg:pr-9 grid grid-cols-1 lg:grid-cols-[1fr_560px] items-start gap-20 lg:gap-[10px] transition-colors duration-700 ease-in-out",
        isVisible ? "bg-black-100 text-white" : "bg-white text-black"
      )}
    >
      <div className="w-full flex flex-col gap-[34px]">
        <p className="max-w-[385px] lg:max-w-[700px] text-[48px] lg:text-[62px] font-[750] leading-[64px] lg:pr-2 -tracking-[0.03em] uppercase ">
          SECURITY FIRST. COMPLIANCE BUILT-IN.
        </p>

        <p className="max-w-[330px] lg:max-w-[606px] text-lg lg:text-xl leading-[28px] -leading-[0.01em] mb-4">
          INFLXD encrypts every packet with in-transit and at-rest, protecting
          finance-grade data end-to-end.
        </p>

        <Button className="max-w-[232px]">
          <span>BOOK A DEMO</span>
          <MoveRight />
        </Button>
      </div>

      <section className="w-full flex flex-col gap-5 pl-[14px] pr-[22px]">
        {data.map((item) => (
          <div
            key={item.title}
            className="w-full border border-[#474E5A] rounded-xl flex flex-col gap-[46px] py-10 px-9"
          >
            {item.icon}

            <p className="font-[700] text-[32px] leading-none -tracking-[0.03em] text-white">
              {item.title}
            </p>

            <ul className="flex flex-col gap-6 list-disc ml-4">
              {item.list.map((unit) => (
                <li
                  key={unit}
                  className="text-xl leading-[31px] text-[#FFFFFFCC]"
                >
                  {unit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Security;
