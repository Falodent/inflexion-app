import { MoveRight } from "lucide-react";
import { useRef } from "react";

// components
import Button from "@/components/button";
import Counter from "@/components/stat/counter";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const button = buttonRef.current;

    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const x = e.clientX - containerRect.left - buttonRect.width / 2;
    const y = e.clientY - containerRect.top - buttonRect.height / 2;

    const clampedX = Math.max(x * 0.2, -buttonRect.left + containerRect.left);
    const clampedY = y * 0.2;

    button.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = `translate(0, 0)`;
    }
  };

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

        <div
          className="py-30 overflow-x-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-10" ref={buttonRef}>
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
      </div>
    </section>
  );
};

export default About;
