import { MoveRight } from "lucide-react";

// components
import Counter from "@/components/stat/counter";
import Button from "@/components/button";

const About = () => {
  return (
    <section className="w-full pt-[180px] px-8">
      <div className="w-full max-w-[1200px] flex flex-col ">
        <h1 className="font-[700] text-[48px] leading-[56px] -tracking-[0.03em] pr-2 mb-30">
          <span className="text-fill">
            Build transcript libraries at scale without the editorial overhead.
            Real-time transcript to 99.9% human-perfect accuracy. You own the IP
            — resell without restrictions.
          </span>
        </h1>

        <Counter />

        <div className="py-30 flex items-center gap-10">
          <Button>
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>

          <Button variant="secondary">
            <span>SEE HOW IT WORKS</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
