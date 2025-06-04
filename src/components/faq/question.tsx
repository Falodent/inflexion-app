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
        "overflow-hidden py-16 px-10 border-t border-[#C5CAD2] flex flex-col gap-6 transition-all duration-500 ease-in-out",
        index === 0 && "border-t-0"
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
            "transform transition-transform duration-500",
            isExpanded ? "rotate-180" : "rotate-0"
          )}
        />

        <p className="pt-2 font-bold text-[32px] leading-[120%] text-black-100">
          {q}
        </p>
      </div>

      <div
        className={clsx(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="ml-10 max-w-[1200px] font-medium text-[26px] leading-[40px] text-black-100">
          {a}
        </p>
      </div>
    </div>
  );
};

export default FaqQuestion;
