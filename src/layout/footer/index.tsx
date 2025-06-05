import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getUTCFullYear();

  return (
    <div className="w-full footer-bg relative">
      <div className="flex flex-col gap-[190px] lg:gap-[300px] w-full pt-[584px]">
        <div className="relative flex flex-col lg:flex-row items-start gap-14 lg:gap-6 justify-between pl-6 lg:pl-14 lg:pr-20">
          <div className="flex flex-col gap-1 lg:gap-5">
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white underline-hover cursor-pointer">
              SERVICES{" "}
              <sup>
                <small>3</small>
              </sup>
            </p>

            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white underline-hover cursor-pointer">
              SOLUTIONS{" "}
              <sup>
                <small>3</small>
              </sup>
            </p>
          </div>

          <div className="flex flex-col gap-1 lg:gap-5">
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white underline-hover cursor-pointer">
              NEWSROOM
            </p>
            <p className="font-[500] text-[28px] leading-none -tracking-[0.04em] text-white underline-hover cursor-pointer">
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
            <a
              href="https://www.linkedin.com/company/inflexiontranscribe/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <p className="text-sm leading-[140%]">LinkedIn</p>
              <MoveUpRight size={10} />
            </a>

            <a
              href="https://www.youtube.com/@inflexiontranscribe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <p className="text-sm leading-[140%]">Youtube</p>
              <MoveUpRight size={10} />
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm leading-[140%] text-white">Privacy Policy</p>
            <p className="text-sm leading-[140%] text-white">
              © {String(year)} — Copyright
            </p>
          </div>
        </div>

        <div className="w-full h-[294px] relative">
          <Image
            src="/assets/svg/footer-logo.svg"
            alt="INFLXD"
            fill
            className="w-full h-full object-contain px-5 pr-8 lg:px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
