import { MoveRight } from "lucide-react";

// components
import Button from "@/components/button";
import Counter from "@/components/stat/counter";

const About = () => {
  return (
    <section className="w-full py-[180px] px-8">
      <div className="w-full max-w-[1200px] flex flex-col gap-30">
        <h1 className="font-[700] text-[48px] leading-[56px] -tracking-[0.03em] pr-2">
          <span className="text-fill">
            Transform earnings audio and expert calls into licensable transcript
            libraries at scale. From real-time streaming to 99.9% human-perfect
            accuracy — own the IP, monetize the content, scale your content
            products.
          </span>
        </h1>

        <Counter />

        <div className="flex items-center gap-10">
          <Button>
            <p>BOOK A DEMO</p>
            <MoveRight />
          </Button>

          <Button variant="secondary">
            <p>Watch 90-sec Tour</p>
            <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
