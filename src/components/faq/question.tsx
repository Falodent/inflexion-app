import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  index: number;
  q: string;
  a: string;
}

const FaqQuestion = ({ index, q, a }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={clsx(
        "overflow-hidden pt-4 px-6 lg:py-16 lg:px-10 lg:border-t border-b border-[#C5CAD2] flex flex-col gap-6 transition-all duration-500 ease-in-out",
        index === 0 && "lg:!border-t-0"
      )}
      key={q}
    >
      <div
        role="button"
        className="flex items-start gap-4 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <ChevronDown
          size={32}
          color="#0000FF"
          className={clsx(
            "transform transition-transform duration-500 shrink-0",
            isExpanded ? "rotate-180" : "rotate-0"
          )}
        />

        <p className="pt-2 font-bold text-[26px] lg:text-[32px] leading-[120%] text-black-100">
          {q}
        </p>
      </div>

      <div
        className={clsx(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isExpanded ? "max-h-[1000px] opacity-100 mt-4 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="ml-6 lg:ml-10 max-w-[1200px] font-medium text-xl leading-[28px] lg:text-[26px] lg:leading-[40px] text-black-100">
          {a}
        </p>
      </div>
    </div>
  );
};

export default FaqQuestion;
