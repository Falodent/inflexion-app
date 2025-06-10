import { MoveRight } from "lucide-react";

// components
import Counter from "@/components/stat/counter";
import Button from "@/components/button";
import { ScrollFillText } from "@/animated/text";
import Link from "next/link";

const About = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <section className="w-full pt-[180px] pl-2.5 pr-7 md:px-8">
      <div className="w-full max-w-[1200px] flex flex-col">
        <ScrollFillText
          containerClassName="max-w-[360px] md:max-w-[600px] xx:max-w-[780px] xl:max-w-[1200px] pr-2 mb-30"
          className="font-[700] text-[32px] md:text-[48px] leading-[37px] md:leading-[56px] -tracking-[0.04em] lg:-tracking-[0.03em]"
        >
          <span>
            Build transcript libraries at scale without the editorial overhead.
            Real-time transcript to 99.9% human-perfect accuracy. You own the IP
            — resell without restrictions.
          </span>
        </ScrollFillText>

        <Counter />

        <div className="py-30 flex flex-col md:flex-row lg:items-center gap-6 lg:gap-10">
          <Button className="w-[236px]" handleClick={handleClick}>
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>

          <Link href="/#how-it-works">
            <Button variant="secondary" className="w-[270px]">
              <span>SEE HOW IT WORKS</span>
              <MoveRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
