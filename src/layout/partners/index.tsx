import Clients from "@/components/partners";

const Partners = () => {
  return (
    <div className="w-full pt-[150px] pb-[70px] flex flex-col gap-[250px]">
      <Clients />

      <div className="w-full flex flex-col px-8 gap-[212px]">
        <h2 className="w-full max-w-[1206px] font-[700] text-[48px] leading-[56px] -tracking-[0.05em]">
          <span className="text-fill pr-2">
            When your finance audio is INFLXD, transcripts stream securely in{" "}
            {"<"} 1-second and are edited with a dedicated editorial team to
            99.9% accuracy within hours — not days.
          </span>
        </h2>

        <div className="w-[350px] ml-auto">
          <p className="text-xl leading-[28px] text-end text-black-100">
            Build transcript libraries as a product and expand your coverage at
            scale without hiring a single editor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
