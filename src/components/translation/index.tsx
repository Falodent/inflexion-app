import Image from "next/image";

interface Props {
  text: string;
}

const Translation = ({ text }: Props) => {
  return (
    <div className="absolute bottom-0 left-30 flex flex-col gap-5 text-black-100">
      <p className="max-w-[630px] font-[700] text-[42px] leading-[48px] -tracking-[0.02em]">
        {text}
      </p>

      <div className="flex flex-col ml-16">
        <Image
          src="/assets/svg/translate.svg"
          alt="pointer"
          width={46}
          height={84}
        />

        <p className="-mt-7.5 ml-16 max-w-[630px] font-[700] text-[42px] leading-[48px] -tracking-[0.02em]">
          Audio is the most <br />
          underutilised source of data.
        </p>
      </div>
    </div>
  );
};

export default Translation;
