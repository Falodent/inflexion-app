import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  text: string;
}

const Translation = ({ text }: Props) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [text]);

  return (
    <div className="absolute bottom-0 left-4 lg:left-24 flex flex-col gap-5 text-black-100">
      <div className="translating" key={animationKey}>
        <p className="font-[700] sm:text-lg md:text-[32px] lg:text-2xl xl:text-[32px] md:leading-[40px] -tracking-[0.02em]">
          {text}
        </p>
      </div>

      <div className="flex flex-col ml-16">
        <Image
          src="/assets/svg/translate.svg"
          alt="pointer"
          width={46}
          height={84}
        />

        <p className="-mt-7.5 ml-16 max-w-[220px] md:max-w-[630px] font-[700] text-lg xs:text-[28px] xs:leading-[34px] md:text-[42px] md:leading-[48px] -tracking-[0.02em]">
          Audio is the most <br />
          underutilised source of data.
        </p>
      </div>
    </div>
  );
};

export default Translation;
