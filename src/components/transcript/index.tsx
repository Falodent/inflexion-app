import Image from "next/image";

const Transcript = () => {
  return (
    <div className="w-[472px] flex flex-col gap-18.5 shrink-0 absolute top-0 left-310">
      <h3 className="h-[190px] font-[800] text-[56px] leading-[90%] -tracking-[0.05em] uppercase text-black">
        Transcripts that work how you work
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

export default Transcript;
