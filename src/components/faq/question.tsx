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
        "overflow-hidden py-8 px-3 xs:px-6 lg:px-10 lg:border-t border-b border-[#C5CAD2] flex flex-col transition-all duration-500 ease-in-out",
        index === 0 && "lg:!border-t-0",
        "hover:bg-[#0000000D] transition-all ease-in-out duration-500",
        isExpanded ? "gap-6" : "gap-0"
      )}
      key={q}
    >
      <div
        role="button"
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <ChevronDown
          size={32}
          color="#0000FF"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className={clsx(
            "transform transition-transform duration-500 shrink-0",
            !isExpanded ? "rotate-360" : "rotate-270"
          )}
        />

        <p className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] leading-none text-black-100">
          {q}
        </p>
      </div>

      <div
        className={clsx(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isExpanded
            ? "max-h-[1000px] opacity-100 mt-4 pb-5"
            : "max-h-0 opacity-0"
        )}
      >
        <p className="ml-11 sm:ml-10 max-w-[1200px] font-medium text-lg sm:text-xl xs:leading-[28px] lg:text-[26px] lg:leading-[40px] text-black-100">
          {a}
        </p>
      </div>
    </div>
  );
};

export default FaqQuestion;
