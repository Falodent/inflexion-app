import Button from "@/components/button";
import { MoveRight } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full bg-white px-8 py-32">
      <div className="w-full h-[595px] pb-[52px] pr-[52px] pl-[82px] pt-[113px] flex flex-col gap-[120px] bg-black-100 rounded-3xl">
        <p className="max-w-[910px] font-[700] text-white text-[80px] leading-none -tracking-[0.04em]">
          When accuracy drives alpha, “close enough” shouldn’t be good enough.
        </p>

        <div className="ml-auto max-w-[232px]">
          <Button className="hover:!text-white">
            <span>BOOK A DEMO</span>
            <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
