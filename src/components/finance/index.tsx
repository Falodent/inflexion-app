import Image from "next/image";

const Finance = () => {
  return (
    <div className="w-[545px] flex flex-col gap-18.5 shrink-0 absolute top-0 left-12">
      <h3 className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black">
        Finance Editorial Team. Not Generic Transcribers
      </h3>

      <Image
        src="/assets/svg/pointer.svg"
        alt="Process"
        width={50}
        height={190}
        className="object-contain ml-11"
      />
    </div>
  );
};

export default Finance;
