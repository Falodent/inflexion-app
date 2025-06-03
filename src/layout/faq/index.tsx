import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const data = [
    {
      q: "Who owns the transcripts and can we resell them?",
      a: "",
    },
    {
      q: "How do you measure accuracy? Do you use WER?",
      a: "",
    },
    {
      q: "What accuracy levels do you actually achieve?",
      a: "",
    },
    {
      q: 'How fast is "the fastest perfect transcription"?',
      a: "",
    },
    {
      q: "What makes your real-time transcription different?",
      a: "",
    },
  ];

  return (
    <section className="w-full py-32 flex flex-col gap-20 bg-white">
      <p className="font-[800] text-[62px] leading-[80px] -tracking-[0.04em] uppercase text-black-100 px-8">
        Frequently Asked Questions
      </p>

      <div className="w-full flex flex-col">
        {data.map((item, index) => (
          <div
            className={clsx(
              "py-16 px-10 border-t border-[#C5CAD2] flex items-center gap-10",
              index === 0 && "border-t-0"
            )}
            key={item.q}
          >
            <ChevronDown size={32} color="#0000FF" />

            <p className="font-[700] text-[32px] leading-[120%] text-black-100">
              {item.q}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
