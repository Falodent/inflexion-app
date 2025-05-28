import { MoveRight } from "lucide-react";

// components
import Counter from "@/components/stat/counter";
import MagneticButton from "@/components/button/magnetic-button";

const About = () => {
  return (
    <section className="w-full pt-[180px] px-8">
      <div className="w-full max-w-[1200px] flex flex-col ">
        <h1 className="font-[700] text-[48px] leading-[56px] -tracking-[0.03em] pr-2 mb-30">
          <span className="text-fill">
            Transform earnings audio and expert calls into licensable transcript
            libraries at scale. From real-time streaming to 99.9% human-perfect
            accuracy — own the IP, monetize the content, scale your content
            products.
          </span>
        </h1>

        <Counter />

        <div className="py-30 flex items-center gap-10">
          <MagneticButton>
            <div className="flex items-center gap-12">
              <span>BOOK A DEMO</span>
              <MoveRight />
            </div>
          </MagneticButton>

          <MagneticButton variant="secondary">
            <div className="flex items-center gap-12">
              <span>Watch 90-sec Tour</span>
              <MoveRight />
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

export default About;
