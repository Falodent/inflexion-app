const Hero = () => {
  return (
    <section className="w-full flex flex-col pl-7 pr-9 pb-16 gap-[150px]">
      <h1 className="w-full max-w-[1233px] uppercase font-[800] text-[150px] leading-[140px] -tracking-[0.05em]">
        <span className="text-fill pr-2">we turn finance audio into data</span>{" "}
        <span className="-ml-8 text-blue-100">.</span>
      </h1>

      <div className="w-[230px] ml-auto">
        <p className="text-xl leading-[28px] text-end text-black-100">
          The world&apos;s fastest perfect transcription for finance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
