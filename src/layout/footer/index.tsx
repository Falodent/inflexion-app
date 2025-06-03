import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getUTCFullYear();

  return (
    <div className="w-full footer-bg relative">
      <div className="flex flex-col gap-[300px] w-full pt-[584px]">
        <div className="relative flex items-start justify-between pl-14 pr-20">
          <div className="flex flex-col gap-5">
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white">
              SERVICES{" "}
              <sup>
                <small>3</small>
              </sup>
            </p>
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white">
              SOLUTIONS{" "}
              <sup>
                <small>3</small>
              </sup>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white">
              NEWSROOM
            </p>
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white">
              PRICING
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm leading-[140%] text-white">
              +1 999 888-77-64
            </p>
            <p className="text-sm leading-[140%] text-white">hello@inflxd.ai</p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white">
              <p className="text-sm leading-[140%]">Facebook</p>
              <MoveUpRight size={10} />
            </div>

            <div className="flex items-center gap-2 text-white">
              <p className="text-sm leading-[140%]">Youtube</p>
              <MoveUpRight size={10} />
            </div>
            <div className="flex items-center gap-2 text-white">
              <p className="text-sm leading-[140%]">LinkedIn</p>
              <MoveUpRight size={10} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm leading-[140%] text-white">Privacy Policy</p>
            <p className="text-sm leading-[140%] text-white">
              © {String(year)} — Copyright
            </p>
          </div>
        </div>

        <div className="w-full h-[294px] px-2 relative">
          <Image
            src="/assets/svg/footer-logo.svg"
            alt="INFLXD"
            fill
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
